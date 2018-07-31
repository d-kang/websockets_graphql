import React, {PureComponent} from 'react';
import {AppContext} from './context';

class Chatbox extends PureComponent {

  setOpenChatbox = () => {
    // console.log('CHATBOX', this.props.chat)
    this.props.openChatbox(this.props.chat.uuid);
  }


  render() {
    const {chat} = this.props;

    console.log('CHATBOX', this.props.chat)
    return (
      <AppContext.Consumer>
        {
          () => {
            return (
              <div className={`chatbox ${chat.chatboxOpen ? "chatbox--open" : "chatbox--close"}`}>
                <span className="chatbox-title">
                  {chat.name}
                  <span
                    className="chatbox-title__button"
                    onClick={this.setOpenChatbox}
                  >^</span>
                </span>

                <div className="chatbox-messages"></div>

                <form action="">
                  <input type="text" />
                  <button>chat</button>
                </form>

              </div>
            )
          }
        }
      </AppContext.Consumer>
    )


    // return (
    //   <div className={`chatbox ${chat.chatboxOpen ? "chatbox--open" : ""}`}>
    //     <span className="chatbox-title">
    //       {chat.name}
    //       <span
    //         className="chatbox-title__button"
    //         onClick={this.setOpenChatbox}
    //       >^</span>
    //     </span>

    //     <div className="chatbox-messages"></div>

    //     <form action="">
    //       <input type="text" />
    //       <button>chat</button>
    //     </form>

    //   </div>
    // )
  }
}


export default Chatbox;