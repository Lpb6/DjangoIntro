const cartArr = [];
$('#cart-amt').text(cartArr.length);

function isValid() {
  const val = $('#val').val();
  if (val >= 100 && val <= 999) {
    cartArr.push(val);
    console.log(cartArr);
    $('#request-validation').text('Added to Cart');
    $('#request-validation').addClass('success');
    $('#request-validation').removeClass('hidden');
    setTimeout(function () {
      $('#request-validation').addClass('hidden');
      $('#request-validation').removeClass('success');
      $('#val').val('');
    }, 1000);
  } else {
    $('#request-validation').addClass('error');
    $('#request-validation').text('Not valid');
    $('#request-validation').removeClass('hidden');
    setTimeout(function () {
      $('#request-validation').addClass('hidden');
      $('#request-validation').removeClass('error');
      $('#val').val('');
    }, 1000);
  }
  $('#cart-amt').text(cartArr.length);
}
$('#add-to-cart').click(function () {
  isValid();
});
$('.cart-btn').click(function () {
  localStorage.setItem('array', JSON.stringify(cartArr));
});
