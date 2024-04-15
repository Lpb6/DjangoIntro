const cart = JSON.parse(window.localStorage.getItem('array'));
console.log(cart.length);
console.log(cart);
$('#cart-amt').text(cart.length);

const container = $('.container');
cart.forEach((i) => {
  let reversedNum = 0;
  let tempNum = i;
  while (tempNum != 0) {
    reversedNum = reversedNum * 10 + (tempNum % 10);
    tempNum = Math.floor(tempNum / 10);
  }
  if (i == reversedNum) {
    class_id = 'pal-yes';
    msg = 'This is a palindrome';
  } else {
    class_id = 'pal-no';
    msg = 'This is not a palindrome';
  }
  container.append(`
    <div class="card">
        <h3>Number Checked:</h3>
        <h4>${i}</h4>
        <p class="${class_id}">${msg}</p>
    </div>
    `);
});
