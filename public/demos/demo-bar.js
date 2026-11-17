/* Shared "this is a demo" bar for the showcase sites. */
(function () {
  var bar = document.createElement('div');
  bar.setAttribute('role', 'note');
  bar.style.cssText = 'position:fixed;left:0;right:0;bottom:0;z-index:9999;display:flex;gap:12px;align-items:center;justify-content:center;flex-wrap:wrap;padding:10px 16px;background:#11100E;color:#F3EEE3;font:600 13px/1.4 system-ui,-apple-system,Segoe UI,Arial,sans-serif;border-top:1px solid #D6B66B';
  var back = '../../websites/';
  bar.innerHTML = '<span>Demo website by <strong style="color:#D6B66B">ANANTA IONS</strong> — the brand and products are fictional.</span>' +
    '<a href="' + back + '" target="_top" style="color:#11100E;background:#D6B66B;padding:6px 12px;border-radius:8px;text-decoration:none">Back to Ananta Ions</a>';
  document.addEventListener('DOMContentLoaded', function () { document.body.appendChild(bar); document.body.style.paddingBottom = '56px'; });
})();
