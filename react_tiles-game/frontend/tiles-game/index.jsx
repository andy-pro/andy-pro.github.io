/* Tiles Classic Game, React version */

'use strict';

/*
import React from 'react';
import ReactDOM from 'react-dom';
*/

import {touchDetector} from '../utils';
import TilesGame from './tiles-game';

const isTouch = touchDetector();

export default {
  isTouch,
  pickEvent: isTouch ? 'onTouchStart' : 'onMouseDown',
  iconClasses: [
    // visit 'http://fontawesome.io/icons' for details
    "bullhorn", "telegram", "balance-scale", "coffee", "wifi", "github",
    "android", "html5", "bath", "thumbs-o-up", "bug", "child",
    "cutlery", "codepen", "thumbs-o-down", "scissors", "bicycle", "smile-o",
    "usb", "anchor", "bluetooth", "youtube-square", "envira", "bank",
    "car", "binoculars", "camera-retro", "firefox", "futbol-o", "cogs"
  ],
  presets: [
    {pairs: 6,  cols: 4}, // beginner, level 1
    {pairs: 8,  cols: 4}, // medium, level 2
    {pairs: 10, cols: 5}, // expert, level 3
    {pairs: 15, cols: 6}  // crazy, level 4
  ]
};

document.querySelector('html').classList.add(
  isTouch ? 'touch-device' : 'desktop-device'
);
// alert('touchpad: ' + isTouch);

ReactDOM.render(
  <TilesGame level='2' />,
  document.getElementById('content1')
);

// ReactDOM.render(
//   <TilesGame level='1' />,
//   document.getElementById('content2')
// );
//
// ReactDOM.render(
//   <TilesGame level='3' />,
//   document.getElementById('content3')
// );
