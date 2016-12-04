'use strict';

import React from 'react';
import { connect } from 'react-redux';

// import * as actions from '../../actions';
import { getRepos, hideRepos, startTimer, stopTimer } from '../../actions';
import types from '../../constants';

import './index.css';

let Users = ({ users, onMouse }) => {

  // console.log('users render', users.result);
  return (
    <div className='content'>
      {users.result.map(id => {
        let user = users.entities.users[id]
        return <User
          key={id}
          user={user}
          onMouse={ e => onMouse(e, user) }
        />
      })}
    </div>
  )
}

const User = ({user, onMouse}) => (
  <div className='user'>
    <div><img src={user.avatar_url} width={60}/></div>
    <div>
      <div>
        <a href={user.html_url} target='_blank'
          className='user__link'
          onMouseOver={onMouse}
          onMouseOut={onMouse}>
          {user.login}
        </a>
      </div>
      <div>
        Score: <span>{user.score}</span>
      </div>
    </div>
  </div>
)

const mapStateToProps = ({users}) => ({users})

const mapDispatchToProps = dispatch => ({
  onMouse: (e, user) => {
    if (e.type === 'mouseover') {

      const el = e.target
      // console.log('X:', el.offsetLeft+el.offsetWidth, 'Y:', el.offsetTop)
      dispatch(startTimer(types.GET_REPOS, {
        delay: 500,
        payload: getRepos,
        args: {
          url: user.repos_url,
          // ability to transfer additional data
          data: {
            x: el.offsetLeft + el.offsetWidth,
            y: el.offsetTop,
            clientX: e.clientX,
            clientY: e.clientY
          }
        }
      }))

      dispatch(stopTimer(types.HIDE_REPOS))

    }
    else if (e.type === 'mouseout') {
      dispatch(startTimer(types.HIDE_REPOS, {delay: 1000, payload: hideRepos}))
      dispatch(stopTimer(types.GET_REPOS))
    }
  }
})

Users = connect(
  mapStateToProps,
  mapDispatchToProps
)(Users)

export default Users
