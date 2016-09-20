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

/* performance polyfill */
(function(){
  if ("performance" in window == false) {
    window.performance = {};
  }
  Date.now = (Date.now || function () {  // thanks IE8
	  return new Date().getTime();
  });
  if ("now" in window.performance == false){
    var nowOffset = Date.now();
    if (performance.timing && performance.timing.navigationStart){
      nowOffset = performance.timing.navigationStart
    }
    window.performance.now = function now(){
      return Date.now() - nowOffset;
    }
  }
})();

/* requestAnimationFrame polyfill */
(function() {
  var lastTime = 0;
  var vendors = ['ms', 'moz', 'webkit', 'o'];
  for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
      || window[vendors[x]+'CancelRequestAnimationFrame'];
  }
  if (!window.requestAnimationFrame) window.requestAnimationFrame = function(callback, element) {
    var currTime = new Date().getTime();
    var timeToCall = Math.max(0, 16 - (currTime - lastTime));
    var id = window.setTimeout(function() { callback(currTime + timeToCall); },
      timeToCall);
    lastTime = currTime + timeToCall;
    return id;
  };
  if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function(id) {
    clearTimeout(id);
  };
}());
