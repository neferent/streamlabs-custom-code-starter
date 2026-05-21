// onLoad fires once when the widget loads.
// There is no onEventReceived for this widget — Streamlabs handles image rotation internally.
//
// obj.detail shape:
// {
//   image_1_href: ['https://cdn.streamlabs.com/...'],  // array of image URLs for placement 1
//   image_2_href: [],                                   // array of image URLs for placement 2
//   placement1_durations: [9],                          // display duration in seconds per image
//   placement2_durations: [5],
// }
//
// Arrays allow multiple images to rotate through each placement slot.

document.addEventListener("onLoad", function (obj) {
  console.log(obj.detail);
});
