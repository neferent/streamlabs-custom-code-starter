// goalLoad fires once when the widget loads.
// goalEvent fires each time a contribution comes in.
//
// obj.detail shape (both events):
// {
//   type: 'tip' | 'superchat' | 'sub' | 'follower' | 'bit' | 'cheer' | ...,
//   title: 'My Goal',
//   percent: 58,
//   ends_at: '2026-05-30 20:44:36',
//   to_go: {
//     value: 14,
//     unit: 'days',
//     formatted_value: '14 days to go'
//   },
//   amount: {
//     current: 58,           // raw number — count for subs/followers/bits, dollar value for tips
//     target: 100,
//     start: 0,
//     manual_start: 0,
//     currency: 'USD',
//     currency_symbol: '$',
//     formatted_current: '$58.00',  // tip/superchat: includes currency symbol
//     formatted_target: '$100.00',  // sub/follower/bit: plain number string, no symbol
//     formatted_start: '$0.00',
//   },
//
//   // --- tip / superchat / charity goals ---
//   // includes: 'tip', 'superchat', and likely 'tiltify', 'streamlabs_charity', 'twitch_charity'
//   data: { from: 'Kevin', amount: '$58.00', message: 'Test donation' },
//
//   // --- bit / stars goals (amount is a number, not a string; no message field) ---
//   // 'bit' = Twitch Bits, 'stars' = Facebook Stars (unconfirmed but likely same shape)
//   // amount.formatted_current is a plain count string, no currency symbol
//   data: { from: 'Kevin', amount: 500 },
//
//   // --- sub / member goals ---
//   platform: 'youtube_account' | 'twitch' | ...,
//   sub_points_goal: false,
//   data: { from: 'Kevin', month: 1 },
//
//   // --- follower goals (data only has from; no amount, message, or month) ---
//   platform: 'youtube_account' | 'twitch' | ...,
//   data: { from: 'Kevin' },
// }

document.addEventListener('goalLoad', function(obj) {
  console.log(obj.detail);
  $('#title').html(obj.detail.title);
  $('#goal-current').text(obj.detail.amount.current);
  $('#goal-total').text(obj.detail.amount.target);
  $('#goal-end-date').text(obj.detail.to_go.formatted_value);
});

document.addEventListener('goalEvent', function(obj) {
  console.log(obj.detail);
  $('#goal-current').text(obj.detail.amount.current);
});
