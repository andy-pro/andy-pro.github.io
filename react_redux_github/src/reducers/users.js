'use strict';

import { normalize, Schema, arrayOf } from 'normalizr';
import types from '../constants';

const initialState = {
  result: []
}

const userSchema = new Schema('users');

export default function users(state=initialState, action) {
  switch (action.type) {
    case types.USERS_LOADED:
      return normalize(action.payload.items, arrayOf(userSchema));
    default:
      return state;
  }
}
