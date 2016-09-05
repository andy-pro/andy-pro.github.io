/* lesson 05 - Stop Watch Timer */

(function() {

  /* timer resolution, msec */
  var RESOLUTION = 25;

  var time_units = [
    { now: 0, delta: RESOLUTION, addZero: false, limit: 999, display: msecDisplay },
    { now: 0, delta: 1, addZero: true, limit: 59, display: secDisplay },
    { now: 0, delta: 1, addZero: true, limit: 59, display: minDisplay },
    { now: 0, delta: 1, addZero: true, limit: 23, display: hourDisplay }
  ];

  var TIME_UNITS_LENGTH = time_units.length;
  var start = false;
  var timerId;

  startButton.onclick = function() {
    start = !start;
    startButton.classList.toggle('stopwatch__pause');
    if (start) {
      timerId = setInterval(performTimeUnit, RESOLUTION, 0);
      startButton.textContent = 'Pause';
    } else {
      clearInterval(timerId);
      startButton.textContent = 'Cont...';
    }
  }

  clearButton.onclick = function() {
    start = false;
    startButton.classList.remove('stopwatch__pause');
    startButton.textContent = 'Start';
    if (timerId) {
      clearInterval(timerId);
    }
    time_units.forEach(function(unit) {
      unit.now = unit.limit;
    });
    performTimeUnit(0);
  }

  function performTimeUnit(step) {
    var unit = time_units[step];
    unit.now += unit.delta;
    if (unit.now > unit.limit) {
      unit.now = 0;
      if (step < TIME_UNITS_LENGTH - 1) {
         performTimeUnit(++step);
      }
    }
    unit.display.textContent = unit.addZero ? addZero(unit.now) : unit.now;
  }

  function addZero(num) {
    var s = '0' + num;
    return s.substr(s.length - 2);
  }

})();
