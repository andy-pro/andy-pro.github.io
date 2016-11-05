/* Tiles Classic Game, React version */

'use strict';

import 'reset-css';
import './main.scss';

/*
import React from 'react';
import ReactDOM from 'react-dom';
*/

import TilesGame from './tiles-game';

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
