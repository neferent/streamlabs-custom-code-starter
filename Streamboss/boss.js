// bossLoad fires once when the widget loads.
//
// obj.detail shape:
// {
//   boss_name: 'Kevin',
//   boss_img: 'https://...',
//   current_health: 3600,
//   total_health: 4800,
//   percent: '75'             // note: string, not a number
// }

// bossDamaged fires when the boss takes damage.
// bossKilled fires when the boss is defeated and a new one is set.
//
// obj.detail shape (both events) — boss data is nested under a 'boss' key:
// {
//   boss: {
//     boss_name: 'Kevin',
//     boss_img: 'https://...',
//     current_health: 3600,
//     total_health: 4800,
//   }
// }

document.addEventListener('bossLoad', function(obj) {
  console.log(obj.detail);
  $('#user_pic').attr('src', obj.detail.boss_img);
  $('#current_health').text(obj.detail.current_health);
  $('#total_health').text(obj.detail.total_health);
  $('#username').text(obj.detail.boss_name);
});

document.addEventListener('bossDamaged', function(obj) {
  console.log(obj.detail);
  $('#current_health').text(obj.detail.boss.current_health);
});

document.addEventListener('bossKilled', function(obj) {
  console.log(obj.detail);
  $('#username').text(obj.detail.boss.boss_name);
  $('#user_pic').attr('src', obj.detail.boss.boss_img);
  $('#current_health').text(obj.detail.boss.current_health);
  $('#total_health').text(obj.detail.boss.total_health);
});
