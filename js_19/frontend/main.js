'use strict';

import 'normalize-css/normalize.css';
import './_fonts/index.scss';
import './main.scss';

import './menu-social';
import './search-form';
import './menu-nav';
import './slider';
import './title-shower';
import './matrix-shower';
import './brief';
import './gallery-bg';
import './preview-post';
import './accordion';
import './brands';
import './footer';
import './menu-v';
import './menu-icon';

$(() => {

  const slider1 = $('#slider1');

  slider1.slider({
    speed: 300,
    keycontrol: true,
    onSlide: next => slider1.titleShower('show', next)
    // onAfterSlide
  })
  .titleShower({titles: '#title-shower1'});

  $('#accordion1').accordion();

});
