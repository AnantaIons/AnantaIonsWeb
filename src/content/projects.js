/* ============================================================================
   PROJECTS — real ANANTA IONS work only.

   Each entry is a system ANANTA IONS has designed or built. `status` is the
   true lifecycle state. No customer, installation count or outcome is claimed
   beyond what is stated here; add a `result` only when it is a verified fact.
   `verified: true` means every field in the entry is true.
   ========================================================================= */

export const projects = [
  {
    id: 'p10-display-controller',
    verified: true,
    title: 'P10 Display Network Controller',
    domain: 'Displays',
    status: 'In development',
    summary:
      'A Wi-Fi managed controller that drives up to eight chains of P10 LED panels, built ' +
      'for campus notice and information displays.',
    problem:
      'Campus LED boards are updated by hand, one board at a time, with a USB stick or a ' +
      'phone app on the same network. Notices go stale and urgent messages arrive late.',
    approach:
      'Put every board on Wi-Fi and move the content, schedule and alerts to a server, so ' +
      'one person can run every display on site from a browser.',
    technology: ['ESP32-S3-WROOM-1-N16R8', 'HUB12 · P10 · 1/4 scan', '74AHCT245 level shifting', 'Wi-Fi'],
    engineering:
      'Eight output ports with 33 Ω series termination, 3.3 V to 5 V level shifting, and ' +
      'a refresh path that must stay steady while the radio is busy.',
    result: null,
  },
  {
    id: 'gsm-sms-notice-board',
    verified: true,
    title: 'GSM SMS Notice Board',
    domain: 'Displays · Connectivity',
    status: 'Built',
    summary:
      'An LED notice board that is updated by sending it a text message — no Wi-Fi, no app.',
    problem:
      'Notice boards in places without reliable internet still need to be updated quickly ' +
      'and from anywhere.',
    approach:
      'A GSM modem receives the SMS, the controller parses it, and the new message is ' +
      'rendered straight onto a P10 LED matrix.',
    technology: ['ESP32 / Arduino Mega', 'SIM800 GSM', 'P10 LED matrix'],
    engineering:
      'Reliable AT-command handling for the GSM modem and clean text rendering on the ' +
      'LED matrix.',
    result: null,
  },
  {
    id: 'gsm-remote-controller',
    verified: true,
    title: 'GSM Remote Controller on an ATtiny85',
    domain: 'Automation · Connectivity',
    status: 'Firmware complete',
    summary:
      'Switch equipment on and off from any phone — by calling it or by sending an SMS — ' +
      'on an 8-pin microcontroller.',
    problem:
      'Pumps, lights and machines in remote places need to be switched without an ' +
      'internet connection, and only by the people allowed to.',
    approach:
      'Two rings from an authorised number toggles the system. The SMS commands ' +
      '"SYSTEM ON" and "SYSTEM OFF" set it directly, and every change is confirmed by SMS.',
    technology: ['ATtiny85 @ 8 MHz', 'SIM800 / SIM900 GSM', 'SoftwareSerial · 4800 baud', 'Relay outputs'],
    engineering:
      'Everything fits in 6.3 KB of the 8 KB flash and 360 of the 512 bytes of RAM: the ' +
      'four authorised numbers live in flash, sprintf was removed, and the serial link ' +
      'runs at 4800 baud so the 8 MHz software UART keeps its timing.',
    result: null,
  },
];
