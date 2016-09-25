'use strict';

// it's not comments below, see https://www.npmjs.com/package/gulp-include
//=require slider/index.js
//=require accordion/index.js

$(function() {

  $('#slider1').slider({
    speed: 300,
    keycontrol: true
  });

  $('#accordion1').accordion();

});
