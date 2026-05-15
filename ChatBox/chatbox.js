// onLoad fires once when the widget loads — obj.detail is empty for ChatBox.

// onEventReceived fires for every IRC message, not just chat.
// Always check command === 'PRIVMSG' before processing — PING and other
// IRC keepalive messages come through the same event.
//
// obj.detail shape:
// {
//   command: 'PRIVMSG' | 'PING' | ...,  // filter on this first
//   from: 'eatmorechikn',               // empty string on non-chat commands
//   body: 'hi',                          // the chat message text
//   platform: 'twitch_account' | ...,
//   messageId: '640c9032-...',
//   owner: true,                         // true if sender is the channel owner
//   subscriber: false,                   // boolean (unlike tags.subscriber which is '0'/'1')
//   userType: 'user' | 'mod' | 'vip' | ...,
//   tags: {
//     'display-name': 'eatmorechikn',
//     'color': '',                        // empty string if user has no chat color set
//     'badges': 'broadcaster/1',
//     'emotes': '',                       // emote position string, empty if no emotes
//     'subscriber': '0',                  // string '0' or '1', not a boolean
//     'mod': '0',
//     'user-id': '693743431',
//     'id': '640c9032-...',              // same as messageId
//   },
//   payload: { raw: '...', ... }         // raw IRC message — rarely needed
// }

document.addEventListener('onLoad', function(obj) {
  console.log(obj.detail);
});

document.addEventListener('onEventReceived', function(obj) {
  if (obj.detail.command !== 'PRIVMSG') return;
  console.log(obj.detail);
});
