'use strict';

import types from './constants';

export const promise = ({dispatch}) => {
  
  /* set 'loadingState' property of store:
     'start', 'stop', 'fail' available */
  const setLoadingState = state => dispatch({
    type: types.LOADING_STATE,
    payload: state
  })

  return next => action => {
    if (action.type !== types.PROMISE) {
      return next(action);
    }
    // console.log('http promise')
    setLoadingState({status: 'start'})
    action.promise.then(
      payload => {
        dispatch({
          type: action.payload,
          payload: payload
        });
        setLoadingState({status: 'stop'})
      },
      error => setLoadingState({status: 'fail', error})
    );
  }
}

export const timer = ({dispatch}) => {
  const timers = {};

  return next => action => {
    // console.log('middleware', action)    
    if (action.type === types.START_TIMER) { 
      /* initialize TimeOut Promise */
      new Promise(function(resolve, reject) {
        timers[action.timerId] = setTimeout(resolve, action.delay);
      /* dispatch scheduled action */
      }).then(() => dispatch(action.payload(action.args)))      
    }
    else if (action.type === types.STOP_TIMER) {
      clearTimeout(timers[action.timerId]);
    }  
    else {
      return next(action);
    }
  }
}
