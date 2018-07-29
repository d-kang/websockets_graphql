import React, { Component } from 'react';
// import '../assets/App.scss';
import Nav from './Nav.jsx';
import Sidebar from './Sidebar.jsx'

class App extends Component {
  state = {
    sidebarOpen: false,
  }

  toggleSidebar = () => {
    this.setState(prevState => {
      return {
        sidebarOpen: !prevState.sidebarOpen,
      }
    })
  }

  render() {
    const {sidebarOpen: open} = this.state;
    return (
      <div>
        <Sidebar open={open}/>
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
          hello
        </div>
      </div>
    );
  }
}

export default App;
