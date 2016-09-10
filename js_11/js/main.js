/* lesson 11 */

$(function() {

  $('#carousel1').carOusel().data('next', true);

  setInterval(function() {
    var date = new Date(),
        sec = date.getSeconds(),
        car = $('#carousel1'),
        data = car.data(),
        inputs = $('input');
    $('#time-string').text(date.toLocaleTimeString());
    if (!(sec % inputs[0].value)) car.carOusel('slide', data.next);
    if (!(sec % inputs[1].value)) data.next = !data.next;
  }, 1000);

  $('#carousel2').carOusel({
    speed: 600,
    keycontrol: true
  });

  $('#carousel3').carOusel({
    speed: 200
  });


});
