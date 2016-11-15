/* Tiles Classic Game, React version */

'use strict';

import 'reset-css';
import './main.scss';

/*
import React from 'react';
import ReactDOM from 'react-dom';
*/

import TilesGame from './tiles-game';

import touchDetector from './touch-detector.js';
/* it define '__is_touchpad__' property in window */
document.querySelector('html').classList.add(
  (window.__is_touchpad__ = touchDetector()) ?
  'touch-device' : 'desktop-device'
);
// alert('touchpad: ' + window.__is_touchpad__);

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
