import React, { PureComponent } from 'react';


class Sidebar extends PureComponent {
  state = {
    open: false,
  }

  toggleSidebar = () => {
    this.setState(prevState => {
      return {
        open: !prevState.open,
      }
    })
  }

  render() {
    return (
      <div className="sidebar">
        <button
          className="sidebar__button"
          onClick={this.toggleSidebar}
        >
          {
            this.state.open ? '<' : '>'
          }
        </button>
      </div>
    )
  }
}

export default Sidebar;