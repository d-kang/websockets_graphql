import React, { Component } from 'react';
import '../assets/App.scss';
import Nav from './Nav.jsx';
import Sidebar from './Sidebar.jsx'

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Sidebar />
        Hello
      </div>
    );
  }
}

export default App;
