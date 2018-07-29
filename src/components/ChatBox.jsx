import React, { PureComponent } from 'react';

class ChatBox extends PureComponent {
  handleClick = () => {
    const {
      friend: { uuid, name },
      chatOverlay,
      setOverlay,
    } = this.props;


    const doesContain = chatOverlay.findIndex(obj => obj.uuid === uuid) > -1
    console.log('doesContain: ', doesContain);
    if (!doesContain) {
      setOverlay({ name, uuid })
    }
  }

  render() {
    const {
      friend: { uuid, name },
    } = this.props;

    console.log('uuid: ', uuid);
    return (
      <div key={uuid} className="friendslist__friend" onClick={this.handleClick}>
        <span>{name}</span>
      </div>
    )
  }
}

export default ChatBox;