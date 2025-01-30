console.log('Coded by Prathyusha Batchalakuri 🤍');
let screenValue = '';
let screen = $('#Result');
$('button').click(function(e) {
  buttonText = $(this).text();
  if (buttonText == 'C') {
    screenValue = '';
    screen.val(screenValue);
  } else if (buttonText == '=') {
    query = $('#Result').val();
    screen.val(eval(query));
  } else {
    screenValue += buttonText;
    screen.val(screenValue);

  }
});
