'use strict';

import types from '../constants';

const initialState = {
  message: 'Hello World!',
  duration: 0
}

export default function loading(state=initialState, action) {
  switch (action.type) {
    case types.FLASH_MESSAGE:
      return action.payload;
    default:
      return state;
  }
}
