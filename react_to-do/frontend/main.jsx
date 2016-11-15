/* To Do Classic App, React version */

'use strict';

import 'reset-css';
// import 'normalize-css';
import './main.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import TodoApp from './to-do';

let todos = [
  { title: 'Вынести мусор', done: true },
  { title: 'Купить хлеб' },
  { title: 'Завоевать мир' }
];

ReactDOM.render(
  <TodoApp todos={todos} />,
  document.getElementById('todo')
);
