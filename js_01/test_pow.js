// copy & run this code into browser console
var x_min = -15;
var x_max = 15;
var n_min = -10;
var n_max = 10;

var error = 0; // no errors
var x = x_min;
outer:
while (x <= x_max) {
  var n = n_min;
  while (n <= n_max) {
    my_result = pow(x, n);
    // console.log('my pow: ', x, ' in power ', n, ' = ', my_result);
    native_result = Math.pow(x, n);
    // console.log('Math.pow: ', x, ' in power ', n, ' = ', native_result);
    if (my_result != native_result) {
      error = 1; // error code
      break outer;
    }
    n++;
  }
  x++;
}

error ? console.log('Error: %d for power %d', x, n) : console.log('OK');
