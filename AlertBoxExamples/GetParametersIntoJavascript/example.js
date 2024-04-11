$(document).ready(() => {
  // Write custom javascript below

  // Vanilla js
  const name = document.getElementById('get_name');
  
  let newName = '';

  // Loop through string and replace each letter with styled letter
  for (var i = 0; i < name.innerText.length; i++) {
    
    let currentChar = name.innerText.charAt(i);

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

    // Slightly rotate each character
    // Generate random number between 0 and 1 with decimals
    var randomNumberSeed = Math.random();
    // Convert seed number to be between -5 and +5
    var scaledNumber = (randomNumber * 10) - 5;

    let randomDegree = scaledNumber + 'deg';



    let newNameChar = `<span style="color: ${hexColor}; transform: rotateZ(${randomDegree}); display: inline-block;">${currentChar}</span>`;
    newName = newName + newNameChar;
  }
  name.innerHTML = newName;
  name.classList.remove('hidden');

  setTimeout(() => {
    name.classList.add('hidden');
  }, 5000);



});
