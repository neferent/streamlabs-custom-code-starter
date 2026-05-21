# Streamlabs Custom Code Starter

A starter kit for building custom widgets and alerts on [Streamlabs](https://streamlabs.com). Each widget has its own folder containing an HTML, CSS, and JS file — copy the relevant code into Streamlabs' Custom HTML/CSS/JS fields for that widget.

## Getting Started

### What you need
- A Streamlabs account with access to the widget you want to customize
- A local code editor with live preview — [Phoenix Code](https://phcode.io/) is recommended (open the project folder and use its built-in live preview)
- Google Chrome for testing — OBS Studio and Streamlabs Desktop both use a Chromium-based browser source, so you do not need to worry about other browsers

### How to use this kit
- Fork this repo (consider one fork per client or project)
- `git clone https://github.com/neferent/streamlabs-custom-code-starter.git`
- Open the folder in Phoenix Code
- Edit the files for the widget you want to customize
- Copy the contents of `<body>` (not the full HTML file) into the Streamlabs widget's Custom HTML field
- Copy the CSS and JS into their respective Custom CSS and Custom JS fields

> **Note:** jQuery 3.7.1 is pre-loaded by Streamlabs in all widgets — you do not need to import it yourself when pasting into Streamlabs. The `<script>` tag in each HTML file is only there so the code works in local preview.

## What's Included

| Folder | Widget Type |
|--------|------------|
| `AlertBox/` | Alert Box — organized by platform (Twitch, YouTube, Facebook, Trovo, Picarto) and service (Streamlabs, Patreon, charity platforms) |
| `AlertBoxExamples/` | Worked examples showing common alert patterns |
| `ChatBox/` | Chat Box widget |
| `EndCredits/` | End Credits widget |
| `EventList/` | Event List widget |
| `Goals/` | Goal widget |
| `Poll/` | Poll widget |
| `SpinWheel/` | Spin Wheel widget |
| `SponsorBanner/` | Sponsor Banner widget |
| `Streamboss/` | Stream Boss widget |
| `TipTicker/` | Tip Ticker widget |
| `ViewerCount/` | Viewer Count widget |
| `Snippets/` | Reusable code patterns |

## Key Concepts

### Tokens
Streamlabs replaces `{token}` placeholders in your HTML at runtime. Available tokens are listed in comments at the top of each HTML file (e.g. `{name}`, `{amount}`, `{message}`).

### Events
Widgets receive data through browser custom events. The event model differs by widget type:

**Alert Box** — code runs inside `$(document).ready()`. The alert DOM is automatically reset after the alert duration, so each alert plays in isolation. Set your alert duration ~1 second longer than your animation to avoid cut-offs.

**All other widgets** — use `document.addEventListener`:
```js
document.addEventListener('onLoad', function(obj) {
  // fires once when the widget loads
});
document.addEventListener('onEventReceived', function(obj) {
  // fires on each new event
});
```

Some widgets have their own specific events — see the JS file for each widget.

### Testing locally
Live layout and CSS can be previewed in Phoenix Code. However, Streamlabs events (`onEventReceived`, `goalLoad`, etc.) won't fire locally. To test event-driven behavior without going live, you can dispatch a fake event from the browser console:

```js
document.dispatchEvent(new CustomEvent('onEventReceived', { detail: { /* event data */ } }));
```

### Third-party libraries
If your alert depends on a CDN library (Velocity.js, Anime.js, etc.), use the dependency loader pattern in `Snippets/dependency-loader.js` to make sure the library is ready before your code runs.
