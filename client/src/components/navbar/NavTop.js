import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../services/api.js'
import './NavTop.scss'


const logoutUser = (props) =>{
  logout()
  .then(() => {
    props.updateUser(null);  // sets the global user object to 'null'
  })
}


const NavTop = (props) => {

  if (!props.userInSession) { // when user is logged OUT
    return (
      <div className="navtop-container">
        <nav className="nav-style">
          <ul>
            <li><Link to='/login' style={{ textDecoration: 'none' }}>Login</Link></li>
            <li><a href="http://localhost:5000/api/google">log in with google</a></li>
            <li><Link to='/signup' style={{ textDecoration: 'none' }}>Signup</Link></li>
          </ul>

        </nav>
      </div>
    )
  } else { // when user is logged IN
    return (
      <div className="navtop-container">
      <nav className="nav-style">
        <ul>
          <li>Welcome, {props.userInSession.email}</li>
          <li>
            <Link to='/profile'>Profile</Link>
            <Link to='/plan'>Plan</Link>
            <Link to='/nutrition'>Nutrition</Link>
            <Link to='/donate'>Donate</Link>
          </li>
          <li>
            <Link to='/'>
              <button onClick={() => logoutUser(props)}>Logout</button>
            </Link>
          </li>
        </ul>
      </nav>
      </div>
    )

    
  }
}

export default NavTop;