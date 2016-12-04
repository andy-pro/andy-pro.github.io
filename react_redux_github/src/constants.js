import keyMirror from 'keymirror';

export default keyMirror({

  /* promise for ajax requests */
  PROMISE       : null,
  /* ajax actions */
  USERS_LOADED  : null,
  REPOS_LOADED  : null,
  /* ajax state */
  LOADING_STATE : null,

  /* promise for deferred actions */
  START_TIMER   : null,
  STOP_TIMER    : null,
  /* deferred actions */
  GET_REPOS    : null,
  HIDE_REPOS    : null,
  FLASH_MESSAGE : null
});
