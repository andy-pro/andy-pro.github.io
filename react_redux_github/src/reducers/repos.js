'use strict';

import types from '../constants';

const initialState = {
  show: false,
  items: [],
  coords: {
    x: 0,
    y: 0,
    clientX: 0,
    clientY: 0
  }
}

export default function repos(state=initialState, action) {
  switch (action.type) {
    case types.REPOS_LOADED:
      return action.payload;
    case types.HIDE_REPOS:
      return {
        ...state,
        show: false
      }
    default:
      return state;
  }
}
