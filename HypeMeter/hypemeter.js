// Hype Meter — tracks stream activity and fills a visual bar.
// Uses onLoad + onEventReceived from the generic widget event model.
//
// Hype is a 0–100 value. Events add hype; it decays by 1 per second when idle.
// Three visual states kick in at 33 (warm), 66 (hot), and 90 (hype).
//
// Event hype contributions:
//   follow / subscriber / member:  +8
//   resub:                         +6
//   giftsub (bulk):                +15
//   bits / cheer (≥1000):          +12
//   bits / cheer (<1000):          +5
//   donation (≥$10):               +12
//   donation (<$10):               +7
//   raid (≥10 viewers):            +20
//   raid (<10 viewers):            +10
//   superchat:                     +10
//   merch / charity / other:       +6

var hype = 0;
var DECAY_RATE = 1;     // hype lost per second
var DECAY_INTERVAL = 1000; // ms

var HYPE_BY_TYPE = {
  follow:      8,
  subscription: 8,
  resub:       6,
  giftsub:     15,
  superchat:   10,
  member:      8,
  merch:       6,
  charity:     6,
};

function addHype(amount) {
  hype = Math.min(100, hype + amount);
  render();
}

function hypeForEvent(detail) {
  var type = (detail.type || '').toLowerCase();

  if (type === 'bits' || type === 'cheer') {
    return detail.amount >= 1000 ? 12 : 5;
  }
  if (type === 'donation' || type === 'tip') {
    return detail.amount >= 10 ? 12 : 7;
  }
  if (type === 'raid') {
    var viewers = detail.raiders || detail.amount || 0;
    return viewers >= 10 ? 20 : 10;
  }

  return HYPE_BY_TYPE[type] || 6;
}

function render() {
  var pct = Math.round(hype);

  $('#hype-fill').css('height', pct + '%');
  $('#hype-glow').css('height', pct + '%');

  var $meter = $('#hype-meter');
  $meter.removeClass('warm hot hype');

  if (pct >= 90) {
    $meter.addClass('hype');
  } else if (pct >= 66) {
    $meter.addClass('hot');
  } else if (pct >= 33) {
    $meter.addClass('warm');
  }
}

// Decay loop — runs every second, reduces hype by DECAY_RATE
setInterval(function () {
  if (hype > 0) {
    hype = Math.max(0, hype - DECAY_RATE);
    render();
  }
}, DECAY_INTERVAL);

document.addEventListener('onLoad', function (obj) {
  console.log('[HypeMeter] loaded', obj.detail);
  render();
});

document.addEventListener('onEventReceived', function (obj) {
  console.log('[HypeMeter] event', obj.detail);
  var gain = hypeForEvent(obj.detail);
  addHype(gain);
});
