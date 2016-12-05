'use strict';

import * as api from './api'
import types from './constants';

export const searchUsers = query => ({
  type: types.PROMISE,
  payload: types.USERS_LOADED,
  promise: api.searchUsers(query)
})

export const getRepos = args => ({
  type: types.PROMISE,
  payload: types.REPOS_LOADED,
  promise: api.getRepos(args)
})

export const hideRepos = () => ({
  type: types.HIDE_REPOS
})

export const flashMessage = payload => ({
  type: types.FLASH_MESSAGE,
  payload
})

export const startTimer = (timerId, {delay, action, args}) => ({
  type: types.START_TIMER,
  timerId,
  delay,
  action: () => action(args)
})

export const stopTimer = timerId => ({
  type: types.STOP_TIMER,
  timerId
})

