/* Minimal static server for dist/, with the clean-URL behaviour a static host
   provides (/about/ -> /about/index.html). Used by the QA pass and for local
   checking of the real build. */

import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, resolve, normalize } from 'node:path';

const ROOT = resolve(process.argv[2] || 'dist');
const PORT = Number(process.env.PORT || 8125);
/* Mirrors BASE_PATH so a subdirectory build can be served, and tested, at the
   prefix it will actually live under. */
const PREFIX = (process.env.BASE_PATH || '/').replace(/\/$/, '');
const TYPES = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8', '.json': 'application/json',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.woff2': 'font/woff2',
  '.xml': 'application/xml', '.txt': 'text/plain; charset=utf-8',
};

createServer(async (req, res) => {
  try {
    const url = new URL(req.url, 'http://localhost');
    let p = normalize(decodeURIComponent(url.pathname)).replace(/^(\.\.[/\\])+/, '');
    if (PREFIX && p.startsWith(PREFIX)) p = p.slice(PREFIX.length) || '/';
    let file = join(ROOT, p);
    try {
      if ((await stat(file)).isDirectory()) file = join(file, 'index.html');
    } catch {
      if (!extname(file)) file = join(ROOT, p, 'index.html');
    }
    const body = await readFile(file);
    res.writeHead(200, {
      'content-type': TYPES[extname(file)] || 'application/octet-stream',
      'cache-control': 'no-store',
      'x-content-type-options': 'nosniff',
    });
    res.end(body);
  } catch {
    res.writeHead(404, { 'content-type': 'text/plain' });
    res.end('404');
  }
}).listen(PORT, () => console.log(`serving ${ROOT} on http://localhost:${PORT}${PREFIX}/`));
