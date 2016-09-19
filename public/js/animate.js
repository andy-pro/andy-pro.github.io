/* animate function */

function animate(opts) {
  // https://learn.javascript.ru/js-animation
  var start = performance.now();
  requestAnimationFrame(function animate(time) {
    var timeFraction = (time - start) / opts.duration;
    if (timeFraction > 1) timeFraction = 1;
    var progress = opts.timing(timeFraction)
    opts.draw(progress);
    if (timeFraction < 1) requestAnimationFrame(animate);
    else if (typeof opts.oncomplete == 'function') {
      // add 'oncomplete' event
      opts.oncomplete({type: 'oncomplete'});
    }
  });
}
