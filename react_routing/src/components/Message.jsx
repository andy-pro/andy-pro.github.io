import React from 'react';
import messages from '../messages.json';
import './Message.less';

export default class Message extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      message: {}
    };
  }

  getMessage(id) {
    // asynchronous emulation
    // console.log('request');
    this.update = true;
    setTimeout(() => {
      // const id = this.props.params.messageId;
      this.setState({
        message: messages.find(message => message.id === id)
      });
    }, 0);
  }

  componentWillMount() {
    this.getMessage(this.props.params.messageId);
  }

  // componentWillReceiveProps(nextProps) {
  //   console.log(
  //     'new props received'
  //     // ,JSON.stringify(nextProps)
  //   );
  // }

  shouldComponentUpdate(nextProps, nextState) {
    /* double rendering preventing */
    if (nextProps.location.action === 'PUSH') {
      return false;
    }
    const nextId = nextProps.params.messageId;
    const prevId = this.state.message.id;
    let update = false;
    if (nextId !== nextState.message.id) {
      this.getMessage(nextId);
    } else {
      update = this.update;
      this.update = false;
    }

    // console.log(
    //   // JSON.stringify(nextProps),
    //   JSON.stringify(nextProps.location.action),
    //   '\nMessage component: should update:',
    //   '\nnext props:', nextId,
    //   '\nnext state:', nextState.message.id,
    //   '\nthis state:', prevId,
    //   '\nupdate_flag:', update
    //   // '\nprev message:', JSON.stringify(this.state.message)
    //   // JSON.stringify(nextState, null, 2)
    // );

    return update;
  }

  render() {
    const { message } = this.state;
    console.warn(
      // 'MESSAGE RENDER!'
      `MESSAGE ${message.id} RENDER!`
      // ,JSON.stringify(message)
    );
    return (
      <div className='Message'>
        <p><b>From:</b> {message.senderName} ({message.senderEmail})</p>
        <p><b>To:</b> you</p>
        <p><b>Subject:</b> {message.subject}</p>
        <hr />
        <p>{message.body}</p>
      </div>
    );
  }

}
