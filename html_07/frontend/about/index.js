'use strict';

import './styles.styl';
import template from './template.jade';

export default class About {
  constructor(items) {
    this.html = template({items});
  }
}
