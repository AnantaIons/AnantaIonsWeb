/* ============================================================================
   PROJECTS — real ANANTA IONS work only.

   Each entry is a system ANANTA IONS has designed or built. `status` is the
   true lifecycle state. No customer, installation count or outcome is claimed
   beyond what is stated here; add a `result` only when it is a verified fact.
   `verified: true` means every field in the entry is true.
   ========================================================================= */

export const projects = [
  {
    id: 'industrial-iot-p10-monitor',
    verified: true,
    title: 'Factory Climate Monitor',
    domain: 'Industrial IoT',
    status: 'Prototype',
    summary:
      'Shows time, temperature and humidity on a large LED board, sends readings to a ' +
      'server over the mobile network, and switches fans or heaters by SMS.',
    problem:
      'Shop floors need to keep heat and humidity in range, but nobody watches a small ' +
      'thermometer, and many sites have no reliable Wi-Fi.',
    approach:
      'An ATmega2560 reads a DHT22 sensor and a DS3231 clock and shows the values on two ' +
      'P10 panels. A cellular modem sends a reading to the server every minute and takes ' +
      'six SMS commands to switch fan and heater relays or ask for status. Above 40 °C or ' +
      '80% humidity, a buzzer sounds and an SMS alert goes out.',
    result: null,
  },
  {
    id: 'p10-display-controller',
    verified: true,
    title: 'Campus Display Network',
    domain: 'LED displays',
    status: 'In development',
    summary:
      'Our own controller for campus LED notice boards, updated over Wi-Fi from one ' +
      'dashboard.',
    problem:
      'Most campus LED boards are updated one at a time with a USB stick or a phone app. ' +
      'Old notices stay up and urgent ones go up late.',
    approach:
      'Each board connects to Wi-Fi and gets its content from a server. One person can ' +
      'update every board on campus from a browser.',
    result: null,
  },
  {
    id: 'gsm-sms-notice-board',
    verified: true,
    title: 'GSM SMS Notice Board',
    domain: 'LED displays',
    status: 'Built',
    summary:
      'An LED notice board that you update by sending it an SMS. No Wi-Fi or app needed.',
    problem:
      'Places without reliable internet still need notice boards that can be changed ' +
      'quickly, from anywhere.',
    approach:
      'The board has its own SIM card. Send it an SMS and the new message appears on ' +
      'the display.',
    result: null,
  },
  {
    id: 'gsm-remote-controller',
    verified: true,
    title: 'GSM Remote Switch',
    domain: 'Automation',
    status: 'Complete',
    summary:
      'Turn a pump, light or machine on or off from any phone, by calling or sending an ' +
      'SMS. No internet needed.',
    problem:
      'Equipment in remote places, like farm pumps, needs to be switched on and off ' +
      'without internet, and only by approved people.',
    approach:
      'Calling from an approved number and letting it ring twice switches the output. ' +
      'Sending "SYSTEM ON" or "SYSTEM OFF" by SMS also works, and the device replies by ' +
      'SMS to confirm.',
    result: null,
  },
];
