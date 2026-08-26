/* One place that knows how to launch a browser.

   Some environments pre-install Chromium at a fixed path and set
   PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD, so Playwright's own resolution finds
   nothing and the executable has to be named explicitly. CI installs it the
   normal way, where naming a path that does not exist is the only way to
   fail. So: use an explicit path only when one actually exists, and otherwise
   let Playwright resolve its own install.

   PLAYWRIGHT_CHROMIUM_PATH overrides both, for anyone whose setup differs. */

import { chromium } from 'playwright';
import { existsSync } from 'node:fs';

const CANDIDATES = [
  process.env.PLAYWRIGHT_CHROMIUM_PATH,
  '/opt/pw-browsers/chromium',
].filter(Boolean);

export function launchOptions(extra = {}) {
  const found = CANDIDATES.find((p) => existsSync(p));
  return found ? { executablePath: found, ...extra } : extra;
}

export function launchBrowser(extra = {}) {
  return chromium.launch(launchOptions(extra));
}
