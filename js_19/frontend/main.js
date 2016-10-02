const $ = require("jquery");

require('./slider')($);
require('./title_shower')($);
require('./accordion')($);

$(() => {

  'use strict';

  const slider1 = $('#slider1');

  slider1.slider({
    speed: 300,
    keycontrol: true,
    onSlide: (next, e) => slider1.titleShower('show', next)
    // onAfterSlide
  })
  .titleShower({titles: '#title-shower1'});

  $('#accordion1').accordion();

});
