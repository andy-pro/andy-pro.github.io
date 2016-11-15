import React, { Component } from 'react';
import Comment from './Comment';

export default class CommentList extends Component {
  render() {
    console.log('rendering comment list!');
    let commentNodes = this.props.data.map(function(comment) {
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
}
