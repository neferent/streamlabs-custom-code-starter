// onLoad fires once when the widget loads.
// obj.detail for onLoad contains only widget settings — no useful event data.

// onEventReceived fires for each new event (follow, donation, sub, etc.)
//
// obj.detail shape:
// {
//   type: 'donation' | 'follow' | 'subscription' | 'bits' | ...,
//   from: 'Kevin',
//   to: 'StreamerName',
//   message: 'This is a test donation for $15.00',
//   amount: 15,                    // raw number
//   formattedAmount: '$15.00',     // currency-formatted string
//   currency: 'USD',
//   tag: '$15.00',                 // pre-formatted label used by the {tag} token in the HTML template
//   name: 'Kevin',                 // same as from
//   isTest: true,
//   createdAt: '2026-05-15 21:11:31',
//   createdAtTimestamp: 1778879491286,
//   payload: { ... }              // duplicates most top-level fields, rarely needed directly
// }
//
// The {tag} and {from} tokens in the HTML template are populated automatically by Streamlabs.
// Use onEventReceived only if you need custom logic beyond what the template provides.

document.addEventListener("onLoad", function (obj) {
  console.log(obj.detail);
});

document.addEventListener("onEventReceived", function (obj) {
  console.log(obj.detail);
});
