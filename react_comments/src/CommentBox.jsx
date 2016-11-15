import React, { Component } from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import $ from 'jquery';

export default class CommentBox extends Component {

  static propTypes = { pollInterval: React.PropTypes.number };
  static defaultProps = { pollInterval: 2000 };

  constructor(props) {
    super(props);
    console.log(props);
    this.state = { data: [] };
  }

  loadCommentsFromServer() {
    console.log('loadCommentsFromServer', this);
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.log('error');
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }

  handleCommentSubmit(comment) {
    // TODO: submit to the server and refresh the list
    console.log('comment', comment);
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: comment,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }

  componentDidMount() {
    console.log('did mount & set interval!', typeof this.props.pollInterval);
    this.loadCommentsFromServer();
    // https://habrahabr.ru/post/199456/
    // Bind, Call и Apply в JavaScript
    let bound = this.loadCommentsFromServer.bind(this);
    setInterval(bound, this.props.pollInterval);
  }

  render() {
    console.log('CommentBox rendering');
    let bound = this.handleCommentSubmit.bind(this);
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={bound} />
      </div>
    );
  }

}


// CommentBox.propTypes = { pollInterval: React.PropTypes.number };
// CommentBox.defaultProps = { pollInterval: 2000 };
