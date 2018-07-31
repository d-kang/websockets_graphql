import React, { Component } from 'react';
// import '../assets/App.scss';
import Nav from './Nav.jsx';
import Sidebar from './Sidebar.jsx'
import ChatOverlay from './ChatOverlay.jsx'
import {AppContext} from './context'
const friendsList = [
  {
    name: 'Erica',
    uuid: '00'
  },
  {
    name: 'Andrew',
    uuid: '11'
  },
  {
    name: 'Josh',
    uuid: '22'
  },
  {
    name: 'Jessica',
    uuid: '33'
  },
  {
    name: 'Brian',
    uuid: '44'
  },
  {
    name: 'Alex',
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
    const friendState = {
      ...friend,
      chatboxOpen: false,
    }

    this.setState(prevState => {
      return {
        chatOverlay: [...prevState.chatOverlay, friendState]
      }
    })
  }

  openChatbox = (userId) => {
    this.setState(prevState => {
      const copy = prevState.chatOverlay.slice()

      for (let i = 0; i < copy.length; i++) {
        const user = copy[i];
        if (user.uuid === userId) {
          user.chatboxOpen = !user.chatboxOpen
          break;
        }
      }
      return {
        chatOverlay: [...copy],
      }
    })
  }

  render() {
    const {
      sidebarOpen: open,
      friendsList,
      chatOverlay,
    } = this.state;

    const value = {
      chatOverlay,
      openChatbox: this.openChatbox,
    }

    console.log('APP', this.state.chatOverlay[0])

    return (
      <AppContext.Provider value={value}>
        <div className="app-container">

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

            <div className="foo">container 1</div>
            <div className="foo">container 2</div>
            <div className="foo">container 3</div>
            <div className="foo">container 4</div>
            <div className="foo">container 5</div>
            <div className="foo">container 6</div>
            <div className="foo">container 7</div>
            <div className="foo">container 8</div>
            <div className="foo">container 3</div>
            <div className="foo">container 3</div>
            <div className="foo">container 3</div>
            <div className="foo">container 3</div>
            <div className="foo">container 3</div>
            <div className="foo">container 3</div>

            <ChatOverlay />
          </div>

        </div>
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;
