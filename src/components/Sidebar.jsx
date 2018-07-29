import React from 'react';
import ChatBox from './ChatBox'

const Sidebar = ({open, friendsList, ...props}) => {
  return (
    <div className={`sidebar-container ${open ? "sidebar-container--open" : ""}`}>
      {
        friendsList.map((friend, i) => {
          return (
            <ChatBox
              key={i}
              friend={friend}
              {...props}
            />
          )
        })
      }
    </div>
  )
}

export default Sidebar;