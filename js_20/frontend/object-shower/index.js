'use strict';

import './index.scss';
import tmpl from './index.pug';

export default (title, data) =>
  tmpl({
    title,
    data: JSON.stringify(data, null, 2)
  });
