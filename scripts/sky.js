/* Sky cycle — the page colour follows the visitor's clock AND the Indian
   season. Inlined into every page's <head> by scripts/pages.mjs so the right
   colour is there before first paint. No dependencies.

   Seasons: the six ritus, mapped to approximate Gregorian dates for
   Rajasthan. Sunrise/sunset: approximate Jaipur times (IST) for the 1st of
   each month, interpolated through the month.

   Preview: ?sky=HH (hour, 0–23) and/or ?season=vasant|grishma|varsha|
   sharad|hemant|shishir. Every colour pair was contrast-checked against the
   site's secondary text, copper and WhatsApp green (≥4.5:1). */
(function () {
  // [noon page, noon soft] and [night page, night soft] per ritu.
  var SEASONS = {
    vasant:  { day: ['#FBFDF7', '#F2F6EC'], night: ['#0B1426', '#121A33'] }, // spring: fresh, green-tinted
    grishma: { day: ['#FFFBF3', '#F8F1E4'], night: ['#121A33', '#18213F'] }, // summer: hot, sun-bleached
    varsha:  { day: ['#F6F9FA', '#EAF0F2'], night: ['#0D1A2A', '#14233A'] }, // monsoon: cloudy, slate
    sharad:  { day: ['#FFFDF9', '#F6F3EE'], night: ['#0B1426', '#121A33'] }, // autumn: clear, festive
    hemant:  { day: ['#FBFBFD', '#F2F3F7'], night: ['#0A1222', '#101A2E'] }, // pre-winter: crisp
    shishir: { day: ['#F9FAFC', '#EEF1F5'], night: ['#081020', '#0C1426'] }, // winter: misty, long nights
  };
  // Start day-of-year of each ritu (approx.): mid-Mar, mid-May, mid-Jul, mid-Sep, mid-Nov, mid-Jan.
  var STARTS = [[15, 'shishir'], [74, 'vasant'], [135, 'grishma'], [196, 'varsha'], [258, 'sharad'], [319, 'hemant']];
  // Jaipur sunrise / sunset in minutes after midnight, 1st of each month.
  var SUN = [[435, 1075], [425, 1100], [400, 1115], [370, 1130], [345, 1145], [335, 1160],
             [345, 1160], [360, 1140], [370, 1110], [385, 1075], [405, 1055], [425, 1055]];
  var DAWN = ['#FFF6EE', '#FBEDE2'], DUSK = ['#FFF3EA', '#FBEDE2'], TWILIGHT = ['#1B2546', '#222D52'];

  function rgb(c) { return [1, 3, 5].map(function (i) { return parseInt(c.substr(i, 2), 16); }); }
  function mix(a, b, t) { a = rgb(a); b = rgb(b); return '#' + a.map(function (v, i) { return ('0' + Math.round(v + (b[i] - v) * t).toString(16)).slice(-2); }).join(''); }

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

    // Keyframes: [minute, mode, page, soft]. Colours blend only within a mode.
    var K = [
      [0, 'night', S.night], [rise - 60, 'night', S.night], [rise - 1, 'night', TWILIGHT],
      [rise, 'day', DAWN], [rise + 120, 'day', S.day], [noon, 'day', S.day], [set - 120, 'day', S.day],
      [set - 20, 'day', DUSK], [set + 20, 'night', TWILIGHT], [set + 140, 'night', S.night], [1440, 'night', S.night],
    ];
    var root = document.documentElement;
    for (var k = 0; k < K.length - 1; k++) {
      var a = K[k], b = K[k + 1];
      if (minute >= a[0] && minute < b[0]) {
        var t = a[1] === b[1] ? (minute - a[0]) / (b[0] - a[0]) : 0;
        var page = mix(a[2][0], b[2][0], t);
        root.dataset.sky = a[1];
        root.dataset.season = season;
        root.style.setProperty('--sky-0', page);
        root.style.setProperty('--sky-1', mix(a[2][1], b[2][1], t));
        var tc = document.querySelector('meta[name=theme-color]');
        if (tc) tc.content = page;
        return;
      }
    }
  }
  run();
  setInterval(run, 300000);
})();
