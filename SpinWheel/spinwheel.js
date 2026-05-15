// onSpinStart fires when the wheel begins spinning.
//
// obj.detail shape:
// {
//   rotation: 4.686506706900525,  // current rotation in radians
//   speed: 0.345,                 // initial spin speed
//   friction: 0.00115             // deceleration rate
// }

// onResult fires when the wheel stops and a prize is determined.
//
// obj.detail shape:
// {
//   index: 15,              // index of the winning slice
//   result: 'WATER BOTTLE'  // label of the winning slice
// }

document.addEventListener("onSpinStart", (e) => {
  console.log(e.detail);
});

document.addEventListener("onResult", (e) => {
  console.log(e.detail);
});
