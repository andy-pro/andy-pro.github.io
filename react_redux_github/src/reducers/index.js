'use strict';

import { combineReducers } from 'redux'
import { createStore, applyMiddleware } from 'redux';
// import createLogger from 'redux-logger';

import { promise, timer } from '../middlewares';

import loadingState from './loadingState'
import repos from './repos'
import users from './users'
import flash from './flash'

const reducer = combineReducers({
  loadingState,
  repos,
  users,
  flash
})

let middlewares = [promise, timer];

/*
if (NODE_ENV) {
  middlewares.push(createLogger());
}
*/

export default createStore(
  reducer,
  applyMiddleware.apply(null, middlewares)
);
