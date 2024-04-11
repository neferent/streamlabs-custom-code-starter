document.addEventListener("onSpinStart", (e) => {
  console.log(e.detail.rotation);
  console.log(e.detail.speed);
  console.log(e.detail.friction);
});

document.addEventListener("onResult", (e) => {
  console.log(e.detail.result);
});
