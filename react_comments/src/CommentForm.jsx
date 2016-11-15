import React, { Component } from 'react';

export default class CommentForm extends Component {

  constructor(props) {
    super(props);
    // console.log(props);

    // this.changeLevel = this.changeLevel.bind(this);

    this.state = {author: '', text: ''};
  }

  // https://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html
  // 'this' binding with arrow functions
  handleAuthorChange = (e) => {
    console.log(e.target.value);
    this.setState({author: e.target.value});
  }

  handleTextChange = (e) => {
    console.log(e.target.value);
    this.setState({text: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    var author = this.state.author.trim();
    var text = this.state.text.trim();
    if (!text || !author) {
      return;
    }
    // send request to the server
    this.props.onCommentSubmit({author: author, text: text});
    this.setState({author: '', text: ''});
  }

  render() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={this.state.author}
          onChange={this.handleAuthorChange}
        />
        <input
          type="text"
          placeholder="Say something..."
          value={this.state.text}
          onChange={this.handleTextChange}
        />
        <input type="submit" value="Post" />
      </form>
    );
  }
}
