import React from 'react';
import PropTypes from 'prop-types';
// import '../assets/Nav.scss'


const Nav = (props) => {
  return (
    <div className="nav-container">
      <div className="item-1">1</div>
      <div className="item-2">2</div>
      <div className="item-3">3</div>
      <div className="item-4">4</div>
      <div className="item-5">5</div>
    </div>
  )
}


Nav.propTypes = {
  name: PropTypes.string
}

export default Nav;