'use strict';

import './index.scss';
import tmpl from './index.pug';
import '../jq-checkbox';
import {objectsToArrays, calcResult, shuffleArray} from './logic';

export default class testList {

  constructor({data, shuffle=false, target, onResult, clearOnResult=true}) {

    if (shuffle) shuffleArray(data.items);

    let self = this,
        form = $(tmpl(data));

    this.data = data;
    this.onResult = onResult;

    $(target).append(form);

    this.checkboxes = form
      .submit(function() {
        self.checkTestAnswers($(this).serializeArray());
        if (clearOnResult) self.checkboxes.checkbox('reset');
        return false;
      })
      .find('.jq-checkbox').checkbox();
  }

  checkTestAnswers(answers) {
    let answers_array = objectsToArrays(answers),
        result = calcResult(this.data.items, answers_array);
    if (typeof this.onResult === 'function') {
      // raw answers for send to server
      this.onResult(result, answers);
    }
  }

}
