'use strict';

import './index.scss';
import '../close-btn/index.scss';

import React from 'react';

import Todo from './todo';
import TodoForm from './form';
import Clock from '../clock';
// import update from 'immutability-helper';

export default class TodoApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: init(),
      id: props.todos.length
    };
    function init() {
      return props.todos.map((item, id) => {
        if (item.id === undefined) item.id = id;
        return item;
      });
    }
  }

  appendItem = title => {
    let id = this.state.id;
    this.setState({
      // todos: update(this.state.todos, {$push: [{title, id}]}),
      todos: this.state.todos.concat([{title, id}]),
      id: id + 1
    });
  }

  changeItem = (id, prop, value) => {
    let changeProp = item => {
      if (item.id === id) {
        if (prop === 'done' || (prop === 'title' && value)) {
          item[prop] = value;
        }
      }
      return item;
    }
    this.setState({
      todos: this.state.todos.map(changeProp)
    });
  }

  removeItem = id => {
    this.setState({
      // todos: update(this.state.todos, {$splice: [[index, 1]]})
      todos: this.state.todos.filter((item) => item.id !== id)
    });
  }

  render() {
    let done = 0, total = this.state.todos.length;
    let todos = this.state.todos.map(item => {
      if (item.done) done++;
      return (
        <Todo
          key={item.id}
          id={item.id}
          title={item.title}
          done={item.done}
          onChange={this.changeItem}
          onRemove={this.removeItem}
        />
      );
    });
    return (
      <div className='todo'>
        <a className="close" href="/"></a>
        <div className="todo__header">
          <span>TO</span><span> DO</span><span> LIST</span>
        </div>
        <TodoForm onSubmit={this.appendItem} />
        <ul className="todo__list">
          {todos}
        </ul>
        {/*
        <ul className="todo__list--new">
          {this.state.todos.map(renderItem)}
        </ul>
        */}
        <div className="todo__status">
          {total ? (
            <span>Всего дел: <b>{total}</b>, завершенных: <b>{done}</b>. {total === done ? 'Вы молодец!' : ''}</span>
          ) : (
            <span>Пора бы чем-то заняться!</span>
          )}
          <Clock />
        </div>
      </div>
    );
  }

}

TodoApp.propTypes = {
  todos: React.PropTypes.Array
};
TodoApp.defaultProps = {
  todos: []
};
