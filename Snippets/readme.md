# Snippets

Reusable code patterns for Streamlabs custom widgets and alerts. Copy what you need into your widget files.

## dependency-loader.js

Use this in any **Alert Box** that relies on a third-party library loaded from a CDN (e.g. Velocity.js, Anime.js). Without it, your alert code may run before the library has finished loading.

Add your CDN URLs to the `scripts` array and write your alert code inside the `ensureDependencies().then(() => { ... })` callback.

## fake-events.js

A collection of `document.dispatchEvent` calls that simulate Streamlabs events in the browser console. Use these to test event-driven widget behavior locally without needing a live stream.

**How to use:**
1. Open your widget's HTML file in Phoenix Code's live preview
2. Open browser DevTools (F12) and go to the Console tab
3. Paste the relevant event dispatch from `fake-events.js` and press Enter

Covers all widget-specific events: `onLoad`, `onEventReceived`, `goalLoad`, `goalEvent`, `bossLoad`, `bossDamaged`, `bossKilled`, `onSpinStart`, and `onResult`.
