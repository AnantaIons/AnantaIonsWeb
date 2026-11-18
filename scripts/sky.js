/* Sky cycle — the page colour follows the visitor's clock AND the Indian
   season. Inlined into every page's <head> by scripts/pages.mjs so the right
   colour is there before first paint. No dependencies.

   Sets on <html>:
     data-sky     day | night
     data-season  vasant | grishma | varsha | sharad | hemant | shishir
     data-phase   dawn | morning | noon | evening | dusk | night
     --sky-0      page colour            --sky-1      soft sections and cards
     --sky-glow   horizon glow at the top and bottom of the page
     --sky-accent links and small highlights (day only; night uses copper)

   Seasons: the six ritus, mapped to approximate Gregorian dates for
   Rajasthan. Sunrise/sunset: approximate Jaipur times (IST) for the 1st of
   each month, interpolated through the month.

   Preview: ?sky=HH (hour, 0–23) and/or ?season=<ritu>. Every colour was
   contrast-checked (>=4.5:1) against secondary text, links and accents. */
(function () {
  var SEASONS = {
    vasant:  { day: ['#F7FBF2', '#EAF2E1', '#DDF0CF', '#356B30'], night: ['#0B1426', '#121A33', '#22306A'] }, // spring: leafy
    grishma: { day: ['#FFF8EC', '#F7ECD8', '#FFE0A3', '#A8480C'], night: ['#121A33', '#18213F', '#2A3570'] }, // summer: hot sun
    varsha:  { day: ['#F2F7F9', '#E3ECF0', '#CFDFE8', '#175F68'], night: ['#0D1A2A', '#14233A', '#1F3550'] }, // monsoon: rain cloud
    sharad:  { day: ['#FFFAF2', '#F5EDE0', '#FBE3BE', '#8A5A0F'], night: ['#0B1426', '#121A33', '#22306A'] }, // autumn: festive gold
    hemant:  { day: ['#F7F9FC', '#EDF0F6', '#DCE3F0', '#96491F'], night: ['#0A1222', '#101A2E', '#22306A'] }, // pre-winter: crisp
    shishir: { day: ['#F4F6FA', '#E9EDF3', '#D9E0EB', '#96491F'], night: ['#081020', '#0C1426', '#1C2A5C'] }, // winter: misty
  };
  var NIGHT_ACCENT = '#E0915A';
  var DAWN = ['#FFF6EE', '#FBEDE2', '#FFD3AE', '#96491F'];
  var DUSK = ['#FFF3EA', '#FADCD3', '#F9C9B4', '#8A3F1A'];
  var TWILIGHT = ['#1B2546', '#222D52', '#2E3468'];
  // Start day-of-year of each ritu (approx.): mid-Jan, mid-Mar, mid-May, mid-Jul, mid-Sep, mid-Nov.
  var STARTS = [[15, 'shishir'], [74, 'vasant'], [135, 'grishma'], [196, 'varsha'], [258, 'sharad'], [319, 'hemant']];
  // Jaipur sunrise / sunset in minutes after midnight, 1st of each month.
  var SUN = [[435, 1075], [425, 1100], [400, 1115], [370, 1130], [345, 1145], [335, 1160],
             [345, 1160], [360, 1140], [370, 1110], [385, 1075], [405, 1055], [425, 1055]];

  function rgb(c) { return [1, 3, 5].map(function (i) { return parseInt(c.substr(i, 2), 16); }); }
  function mix(a, b, t) { if (!b) b = a; if (!a) a = b; a = rgb(a); b = rgb(b); return '#' + a.map(function (v, i) { return ('0' + Math.round(v + (b[i] - v) * t).toString(16)).slice(-2); }).join(''); }

  function run() {
    var d = new Date(), q = new URLSearchParams(location.search);
    var minute = q.get('sky') ? (+q.get('sky') % 24) * 60 : d.getHours() * 60 + d.getMinutes();
    var doy = Math.floor((d - new Date(d.getFullYear(), 0, 0)) / 864e5);
    var season = 'hemant';
    for (var i = 0; i < STARTS.length; i++) if (doy >= STARTS[i][0]) season = STARTS[i][1];
    if (SEASONS[q.get('season')]) season = q.get('season');
    var S = SEASONS[season];

    var m = d.getMonth(), f = (d.getDate() - 1) / 31, n = SUN[(m + 1) % 12];
    var rise = SUN[m][0] + (n[0] - SUN[m][0]) * f, set = SUN[m][1] + (n[1] - SUN[m][1]) * f;
    var noon = (rise + set) / 2;

    // Keyframes: [minute, mode, colours, phase]. Colours blend only within a mode.
    var K = [
      [0, 'night', S.night, 'night'], [rise - 60, 'night', S.night, 'night'], [rise - 1, 'night', TWILIGHT, 'night'],
      [rise, 'day', DAWN, 'dawn'], [rise + 120, 'day', S.day, 'morning'], [noon - 90, 'day', S.day, 'noon'],
      [noon + 90, 'day', S.day, 'evening'], [set - 120, 'day', S.day, 'evening'], [set - 20, 'day', DUSK, 'dusk'],
      [set + 20, 'night', TWILIGHT, 'dusk'], [set + 140, 'night', S.night, 'night'], [1440, 'night', S.night, 'night'],
    ];
    var root = document.documentElement;
    for (var k = 0; k < K.length - 1; k++) {
      var a = K[k], b = K[k + 1];
      if (minute >= a[0] && minute < b[0]) {
        var t = a[1] === b[1] ? (minute - a[0]) / (b[0] - a[0]) : 0;
        var page = mix(a[2][0], b[2][0], t);
        root.dataset.sky = a[1];
        root.dataset.season = season;
        root.dataset.phase = a[3];
        root.style.setProperty('--sky-0', page);
        root.style.setProperty('--sky-1', mix(a[2][1], b[2][1], t));
        root.style.setProperty('--sky-glow', mix(a[2][2], b[2][2], t));
        root.style.setProperty('--sky-accent', a[1] === 'day' ? mix(a[2][3], b[2][3], t) : NIGHT_ACCENT);
        var tc = document.querySelector('meta[name=theme-color]');
        if (tc) tc.content = mix(a[2][2], b[2][2], t);
        return;
      }
    }
  }
  run();
  setInterval(run, 300000);
})();
