// Fake Event Dispatcher
// Paste these into the browser console to simulate Streamlabs events locally.
// Useful for testing event-driven widget behavior without going live.
//
// Open your widget in Phoenix Code's live preview, open DevTools (F12),
// and run any of the examples below in the Console tab.


// --- Generic widgets (ChatBox, EventList, TipTicker, SponsorBanner, ViewerCount, EndCredits) ---

document.dispatchEvent(new CustomEvent('onLoad', { detail: {} }));

// onEventReceived — donation example (type varies: 'donation', 'follow', 'subscription', 'bits', ...)
document.dispatchEvent(new CustomEvent('onEventReceived', { detail: {
  type: 'donation',
  from: 'TestUser',
  to: 'StreamerName',
  message: 'Test donation message',
  amount: 15,
  formattedAmount: '$15.00',
  currency: 'USD',
  tag: '$15.00',        // pre-formatted label used by {tag} token in HTML template
  name: 'TestUser',
  isTest: true,
  createdAt: '2026-05-15 21:11:31',
  createdAtTimestamp: 1778879491286,
}}));


// --- Goal widget (tip goal) ---

document.dispatchEvent(new CustomEvent('goalLoad', { detail: {
  type: 'tip',
  title: 'My Goal',
  percent: 58,
  ends_at: '2026-05-30 20:44:36',
  to_go: { value: 14, unit: 'days', formatted_value: '14 days to go' },
  amount: {
    current: 58, target: 100, start: 0,
    currency: 'USD', currency_symbol: '$',
    formatted_current: '$58.00', formatted_target: '$100.00', formatted_start: '$0.00'
  },
  data: { from: 'TestUser', amount: '$58.00', message: 'Test donation' }
}}));

document.dispatchEvent(new CustomEvent('goalEvent', { detail: {
  type: 'tip',
  title: 'My Goal',
  percent: 60,
  ends_at: '2026-05-30 20:44:36',
  to_go: { value: 14, unit: 'days', formatted_value: '14 days to go' },
  amount: {
    current: 60, target: 100, start: 0,
    currency: 'USD', currency_symbol: '$',
    formatted_current: '$60.00', formatted_target: '$100.00', formatted_start: '$0.00'
  },
  data: { from: 'TestUser', amount: '$2.00', message: 'Another donation' }
}}));

// --- Goal widget (sub / member goal) ---
// amount.current is a count, not a dollar value — formatted_current has no currency symbol

document.dispatchEvent(new CustomEvent('goalLoad', { detail: {
  type: 'sub',
  platform: 'youtube_account',
  sub_points_goal: false,
  title: 'Member Goal',
  percent: 1,
  ends_at: '2026-05-28 20:46:02',
  to_go: { value: 12, unit: 'days', formatted_value: '12 days to go' },
  amount: {
    current: 1, target: 100, start: 0,
    currency: 'USD', currency_symbol: '$',
    formatted_current: '1', formatted_target: '100', formatted_start: '0'
  },
  data: { from: 'TestUser', month: 1 }
}}));

document.dispatchEvent(new CustomEvent('goalEvent', { detail: {
  type: 'sub',
  platform: 'youtube_account',
  sub_points_goal: false,
  title: 'Member Goal',
  percent: 2,
  ends_at: '2026-05-28 20:46:02',
  to_go: { value: 12, unit: 'days', formatted_value: '12 days to go' },
  amount: {
    current: 2, target: 100, start: 0,
    currency: 'USD', currency_symbol: '$',
    formatted_current: '2', formatted_target: '100', formatted_start: '0'
  },
  data: { from: 'TestUser', month: 1 }
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


// --- Hype Meter widget ---
// The hype meter uses the same onLoad / onEventReceived events as other generic widgets.
// Paste these into the console while previewing HypeMeter/hypemeter.html to test.

document.dispatchEvent(new CustomEvent('onLoad', { detail: {} }));

// follow (+8 hype)
document.dispatchEvent(new CustomEvent('onEventReceived', { detail: {
  type: 'follow', from: 'TestUser', name: 'TestUser', isTest: true
}}));

// small donation (+7 hype)
document.dispatchEvent(new CustomEvent('onEventReceived', { detail: {
  type: 'donation', from: 'TestUser', amount: 5, formattedAmount: '$5.00', isTest: true
}}));

// large donation (+12 hype)
document.dispatchEvent(new CustomEvent('onEventReceived', { detail: {
  type: 'donation', from: 'BigDonor', amount: 50, formattedAmount: '$50.00', isTest: true
}}));

// subscription (+8 hype)
document.dispatchEvent(new CustomEvent('onEventReceived', { detail: {
  type: 'subscription', from: 'SubGuy', isTest: true
}}));

// giftsub (+15 hype)
document.dispatchEvent(new CustomEvent('onEventReceived', { detail: {
  type: 'giftsub', from: 'GenerousUser', amount: 5, isTest: true
}}));

// big raid (+20 hype)
document.dispatchEvent(new CustomEvent('onEventReceived', { detail: {
  type: 'raid', from: 'RaidBoss', raiders: 50, isTest: true
}}));

// bits (+5 hype)
document.dispatchEvent(new CustomEvent('onEventReceived', { detail: {
  type: 'bits', from: 'BitsDude', amount: 100, isTest: true
}}));

// big bits (+12 hype)
document.dispatchEvent(new CustomEvent('onEventReceived', { detail: {
  type: 'bits', from: 'BitsDude', amount: 2000, isTest: true
}}));
