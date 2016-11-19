'use strict';

import React from 'react';
import {Router, Link} from 'react-router';
import app from './app.jsx';

export default class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nowShowing: app.ALL_TODOS,
      editing: null,
      newTodo: ''
    };
  }

  componentDidMount() {
    var a={};
    var r = Router(a);
    console.log(r);
  }


  //
  // componentDidMount() {
  //   console.log('router init');
  //   var setState = this.setState;
  //   var router = Router({
  //     '/': setState.bind(this, {nowShowing: app.ALL_TODOS}),
  //     '/active': setState.bind(this, {nowShowing: app.ACTIVE_TODOS}),
  //     '/completed': setState.bind(this, {nowShowing: app.COMPLETED_TODOS})
  //   });
  //   router.init('/');
  // }

  render() {
    return (
      <div>
        <h1>Hello, Todoshki, {this.state.nowShowing}</h1>
        <ul role="nav">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/repos">Repos</Link></li>
        </ul>
      </div>
    );
  }
}
