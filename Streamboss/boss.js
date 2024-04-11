// Events will be sent when the boss is damaged or killed.
// Please use event listeners to run functions.
document.addEventListener('bossLoad', function(obj) {
  // obj.detail will contain information about the current boss
  // this will fire only once when the widget loads
  console.log(obj.detail);
  $('#user_pic').attr('src', obj.detail.boss_img);
  $('#current_health').text(obj.detail.current_health);
  $('#total_health').text(obj.detail.total_health);
  $('#username').text(obj.detail.boss_name);
});

document.addEventListener('bossDamaged', function(obj) {
  // obj.detail will contain information about the boss and a
  // custom message
  console.log(obj.detail);
  $('#current_health').text(obj.detail.boss.current_health);
});
// Similarly for for when a boss is killed
document.addEventListener('bossKilled', function(obj) {
  console.log(obj.detail);
  $('#username').text(obj.detail.boss.boss_name);
  $('#user_pic').attr('src', obj.detail.boss.boss_img);
  $('#current_health').text(obj.detail.boss.current_health);
  $('#total_health').text(obj.detail.boss.total_health);
});
