$(document).ready(() => {

  // Convert tip amount to a clean number
  var tipAmount = parseFloat($('#bit-amount').text().replace(/[^\d\.]/g, ''));

  // if statements to check tip size, then apply class dependent on it.
  if (tipAmount <= 0.99) {
    $('#alert-container').removeClass('hidden');
    $('#alert-container').addClass('small-tip');
  }
  if (tipAmount >= 1 && tipAmount <= 9.99) {
    $('#alert-container').removeClass('hidden');
    $('#alert-container').addClass('small-tip');
  }
  if (tipAmount >= 10) {
    $('#alert-container').removeClass('hidden');
    $('#alert-container').addClass('small-tip');
  }
});
