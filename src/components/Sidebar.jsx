import React from 'react';
// import '../assets/Sidebar.scss';

const Sidebar = ({open}) => {
  return (
    <div className={`sidebar-container ${open ? "sidebar-container--open" : ""}`}>
    </div>
  )
}

export default Sidebar;