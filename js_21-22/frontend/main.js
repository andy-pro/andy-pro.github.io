/* lesson 21-22 */

'use strict';

import 'normalize-css/normalize.css';
import './main.scss';
import './close-btn/index.scss';
import testList from './test-list';
import data from './test-data.json';
import './modal';

$(() => {

  let modal = $('.modal');

  modal.modal();

  new testList({
    // data: $.extend(true, {}, data),  // типа разные тесты
    data: JSON.parse(JSON.stringify(data)), // на 10-20% быстрее, чем $.extend
    shuffle: true,  // т.к. shuffle перемешивает исходный data
    target: '#test-suite',
    onResult: showResult
  });

  new testList({
    data,
    target: '#test-suite',
    onResult: showResult,
    clearOnResult: false
  });

  function showResult(result, answers_raw) {

    let color;
    switch (+result) {
      case 100: color = 'limegreen'; break;
      case   0: color = 'red';   break;
      default : color = 'darkgray';
    }

    if (NODE_ENV === 'development') {
      console.log(result);
    }

    modal.modal('show', {
      title: 'Результаты теста',
      body: `Ваш результат: <strong style="color:${color}">${result} %</strong>`,
      titleOk: 'Отправить',
      actionOk: () => sendResult(result, answers_raw)
    });

  }

  function sendResult(result, answers_raw) {
    // send answers to server, if you want (;-)
    console.log({
      result: result,
      answers: $.param(answers_raw)
    });
  }

});
