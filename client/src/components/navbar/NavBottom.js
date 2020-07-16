import React from 'react';
import { Link } from 'react-router-dom';
import './NavBottom.scss'


const NavBottom = (props) => {

  if (props.userInSession) { // when user is logged IN
    return (
      <div className="parent-wrapper">
      <nav className="nav-style">
        <ul className="navbottom-container">
          <li className="navbottom-item"> 
            <Link to='/profile'>Profile</Link>
          </li>
          <li className="navbottom-item"> 
            <Link to='/plan'>Plan</Link>
          </li>
          <li className="navbottom-item"> 
            <Link to='/nutrition'>Nutrition</Link>
          </li>
          <li className="navbottom-item"> 
            <Link to='/donate'>Donate</Link>
          </li>
        </ul>
      </nav>
      </div>
    )

    
  }
}

export default NavBottom;