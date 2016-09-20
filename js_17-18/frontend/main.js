$(function() {

  var clr_select = $('#slider_color'),
      slider = $('#slider'),
      colors = $.Color.names;

  for (var color in colors) {
    var val = colors[color];
    if (typeof val == 'string') {
      clr_select.append(
        $('<option>')
        .text(color.charAt(0).toUpperCase() + color.slice(1))
        .val(val)
      );
    }
  }

  clr_select.chosen().change(function(e) {
    slider.animate({
      backgroundColor: this.value,
    }, 2000 );
  });

  $('#car-ousel').carOusel({
    speed: 200,
    keycontrol: true
  });

  new Menu(document.querySelector('.main-menu'), main_menu_data);

});
