// onLoad fires once when the widget loads — obj.detail contains only widget settings.

// onEventReceived fires when viewer counts update.
//
// obj.detail shape:
// {
//   twitch: 0,
//   youtube: 0,
//   facebook: 0,
//   trovo: 0,
//   kick: 0
// }

document.addEventListener('onLoad', function(obj) {
  console.log(obj.detail);
});

document.addEventListener('onEventReceived', function(obj) {
  console.log(obj.detail);
});
