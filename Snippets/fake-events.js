// Fake Event Dispatcher
// Paste these into the browser console to simulate Streamlabs events locally.
// Useful for testing event-driven widget behavior without going live.
//
// Open your widget in Phoenix Code's live preview, open DevTools (F12),
// and run any of the examples below in the Console tab.


// --- Generic widgets (ChatBox, EventList, TipTicker, SponsorBanner, ViewerCount, EndCredits) ---

document.dispatchEvent(new CustomEvent('onLoad', { detail: {} }));

document.dispatchEvent(new CustomEvent('onEventReceived', { detail: {
  listener: 'follower-latest',
  event: { name: 'TestUser', amount: 1 }
}}));


// --- Goal widget ---

document.dispatchEvent(new CustomEvent('goalLoad', { detail: {
  title: 'Sub Goal',
  amount: { current: 42, target: 100 },
  to_go: { ends_at: '2025-12-31' }
}}));

document.dispatchEvent(new CustomEvent('goalEvent', { detail: {
  amount: { current: 43 }
}}));


// --- Stream Boss widget ---

document.dispatchEvent(new CustomEvent('bossLoad', { detail: {
  boss_name: 'TestBoss',
  boss_img: '',
  current_health: 500,
  total_health: 500
}}));

document.dispatchEvent(new CustomEvent('bossDamaged', { detail: {
  boss: { current_health: 450 }
}}));

document.dispatchEvent(new CustomEvent('bossKilled', { detail: {
  boss: { boss_name: 'NewBoss', boss_img: '', current_health: 500, total_health: 500 }
}}));


// --- Spin Wheel widget ---

document.dispatchEvent(new CustomEvent('onSpinStart', { detail: {
  rotation: 3.14,
  speed: 10,
  friction: 0.5
}}));

document.dispatchEvent(new CustomEvent('onResult', { detail: {
  result: 'Prize Name'
}}));
