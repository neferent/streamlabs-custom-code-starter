// onLoad fires once when the widget loads — obj.detail contains only widget settings.

// onEventReceived fires for each new donation/tip.
//
// obj.detail shape:
// {
//   type: 'donation',
//   from: 'Tlogi',
//   name: 'Tlogi',                  // same as from
//   to: '',
//   message: '',
//   amount: 0,                      // WARNING: raw amount may be 0 even on real donations
//   formattedAmount: '$1.00',       // always use this for display, not amount
//   currency: 'USD',
//   donationCurrency: 'USD',
//   isTest: false,
//   createdAt: '2026-05-15 21:15:20',
//   createdAtTimestamp: 1778879720126,
// }

document.addEventListener("onLoad", function (obj) {
  console.log(obj.detail);
});

document.addEventListener("onEventReceived", function (obj) {
  console.log(obj.detail);
});
