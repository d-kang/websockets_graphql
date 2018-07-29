import React, { Component } from 'react';
// import '../assets/App.scss';
import Nav from './Nav.jsx';
import Sidebar from './Sidebar.jsx'

const friendsList = [
  {
    name: 'zero',
    uuid: '00'
  },
  {
    name: 'one',
    uuid: '11'
  },
  {
    name: 'two',
    uuid: '22'
  },
  {
    name: 'three',
    uuid: '33'
  },
  {
    name: 'four',
    uuid: '44'
  },
  {
    name: 'five',
    uuid: '55'
  },
]
class App extends Component {
  state = {
    sidebarOpen: false,
    friendsList: [],
    chatOverlay: [],
  }


  componentDidMount() {
    this.setState(prevState => {
      return {
        friendsList,
      }
    })
  }

  toggleSidebar = () => {
    this.setState(prevState => {
      return {
        sidebarOpen: !prevState.sidebarOpen,
      }
    })
  }

  setOverlay = (friend) => {
    this.setState(prevState => {
      return {
        chatOverlay: [...prevState.chatOverlay, friend]
      }
    })
  }

  render() {
    const {
      sidebarOpen: open,
      friendsList,
      chatOverlay,
    } = this.state;
    return (
      <div>
        <Sidebar
          open={open}
          friendsList={friendsList}
          setOverlay={this.setOverlay}
          chatOverlay={chatOverlay}
        />
        <button
          className={`sidebar__button ${open ? "sidebar_button--open" : ""}`}
          onClick={this.toggleSidebar}
        >
          {
            open ? '<' : '>'
          }
        </button>
        <div className={`content-container ${open ? "content-container--move" : ""}`}>
          <Nav />
          <div className="main-content">
            {
              chatOverlay.map((chat, i) => <div key={i} className="chatbox">{chat.name}</div>)
            }
          </div>

        </div>
      </div>
    );
  }
}

export default App;
