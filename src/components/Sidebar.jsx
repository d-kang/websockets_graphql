import React from 'react';
import Friend from './Friend'

const Sidebar = ({open, friendsList, ...props}) => {
  return (
    <div className={`sidebar-container ${open ? "sidebar-container--open" : ""}`}>
      {
        friendsList.map((friend, i) => {
          return (
            <Friend
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