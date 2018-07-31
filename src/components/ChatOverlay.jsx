import React, {PureComponent} from 'react';
import Chatbox from './Chatbox.jsx'
import { AppContext } from './context'


const ChatOverlay = () => {

  return (
    <div className="chat-overlay-container">
      <AppContext.Consumer>
        {
          ({ chatOverlay, openChatbox }) => {
            console.log('CHATOVERLAY', chatOverlay[0])
            return chatOverlay.map(chat => <Chatbox chat={chat} openChatbox={openChatbox} key={chat.uuid} />)
          }
        }
      </AppContext.Consumer>
    </div>
  )
}

export default ChatOverlay;