import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './CommentBox';
import { data } from './data';

// Fetching from the server
ReactDOM.render(
  // <CommentBox url="/api/comments.json" pollInterval={1000} />,
  <CommentBox url="api/comments.json" pollInterval={5000} />,
  document.getElementById('content')
);
