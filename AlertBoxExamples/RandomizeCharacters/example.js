$(document).ready(() => {
  // Write custom javascript below

  // Vanilla js
  const name = document.getElementById('get_name');
  
  let newName = '';


  for (var i = 0; i < name.innerText.length; i++) {
    let currentchar = name.innerText.charAt(i);

    // Generate random R, G, and B values
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    // Convert RGB to hex
    var hexR = r.toString(16).padStart(2, '0');
    var hexG = g.toString(16).padStart(2, '0');
    var hexB = b.toString(16).padStart(2, '0');

    // Concatenate hex values
    var hexColor = '#' + hexR + hexG + hexB;
    let newNameChar = `<span style="color: ${hexColor}">${currentchar}</span>`;
    newName = newName + newNameChar;
  }
  name.innerHTML = newName;
  name.classList.remove('hidden');

  setTimeout(() => {
    name.classList.add('hidden');
  }, 5000);



});
