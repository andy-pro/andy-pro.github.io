'use strict';

import React from 'react';
import Checkbox from '../checkbox';

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
  }
  changeState = done => this.props.onChange(this.props.id, 'done', done);
  changeTitle = () => this.props.onChange(this.props.id, 'title', this.input.value);
  removeItem = () => this.props.onRemove(this.props.id);
  render() {
    return (
      <li>
        <span className="close" title="Удалить" onClick={this.removeItem}></span>
        <Checkbox on={this.props.done} onChange={this.changeState} />
        <input type="text" title="Редактировать"
          className={"todo__title todo__title--" + (this.props.done ? 'done' : 'pending')}
          onBlur={this.changeTitle}
          ref={el => {
            this.input = el;
            if (el) el.value = this.props.title;
          }}
          placeholder="Введите хоть что-нибудь"
        />
      </li>
    );
  }
}
