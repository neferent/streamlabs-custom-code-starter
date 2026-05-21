# Hype Meter

A vertical bar widget that visually tracks chat activity in real time. It fills up as events come in (follows, subs, donations, raids, etc.) and slowly drains when the stream goes quiet.

## How it works

- Each event adds a fixed amount of hype (0–100 scale).
- Hype decays by 1 per second when no events arrive.
- Three visual states with color and glow shifts:
  - **Warm** (≥33%): green label, flame icon appears
  - **Hot** (≥66%): yellow label
  - **HYPE** (≥90%): red/orange label pulses, flame bounces, bar glows

## Hype contributions per event type

| Event | Hype added |
|-------|-----------|
| Follow / Sub / Member | +8 |
| Resub | +6 |
| Gift sub | +15 |
| Donation / Tip < $10 | +7 |
| Donation / Tip ≥ $10 | +12 |
| Bits < 1000 | +5 |
| Bits ≥ 1000 | +12 |
| Raid < 10 viewers | +10 |
| Raid ≥ 10 viewers | +20 |
| Superchat | +10 |
| Merch / Charity / Other | +6 |

## Streamlabs setup

1. Add a **Custom Widget** in Streamlabs.
2. Paste the contents of `hypemeter.html` `<body>` into **Custom HTML**.
3. Paste `hypemeter.css` into **Custom CSS**.
4. Paste `hypemeter.js` into **Custom JS**.
5. Size the widget to ~60×280px and position it at the edge of your scene.

## Local preview

Open `hypemeter.html` in Phoenix Code and use its live preview. Use the fake-event dispatches from `Snippets/fake-events.js` (hype meter section) in the browser console to test different event types and watch the bar fill and drain.
