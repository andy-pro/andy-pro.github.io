var $ = require("jquery");

require('./flash')($);

$(() => {

  'use strict';

  $('#flash').flash(); // flash plugin setup

  $.flash('<h3>Hint:</h3>' +
    'Click on icon to increase<br>' +
    'Shift + click to decrease', 20);

  let icons = $('.menu-social svg');

  if (NODE_ENV == 'development') {
    console.log(icons);
  }

  icons.click(function(e) {
    var width = (e.shiftKey ? '-' : '+') + '=30';
    $(this).animate({width, height: width}, 'slow');
    return false;
  });

  $('button').click(() => icons.css({width: 24, height: 24}));

});
