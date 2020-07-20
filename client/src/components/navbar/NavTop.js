import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Collapse } from 'react-bootstrap';
import { logout } from '../../services/api.js'


const logoutUser = (props) =>{
  logout()
  .then(() => {
    props.updateUser(null);  // sets the global user object to 'null'
  })
}



const NavTop = (props) => {

  if (!props.userInSession) { // when user is logged OUT
    return (   
    <div>
      <Navbar collapseOnSelect expand='xs' bg="dark" variant="dark" className="navtop-background-color">
        <Navbar.Brand href="/">ShapeIt</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" 
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="collapse-text">
          <Nav>
          <Nav.Link as={Link} to="/login" href="/login">Login</Nav.Link>
          {/* <Nav.Link href="http://localhost:5000/api/google">Login with google</Nav.Link> */}
          <Nav.Link as={Link} to='/signup' href="/signup">Signup</Nav.Link>
          </Nav>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
    )
  } else { // when user is logged IN
    return (
    <div>
      <Navbar collapseOnSelect expand='xs' bg="dark" variant="dark" className="navtop-background-color" >
        <Navbar.Brand href="/">ShapeIt</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" 
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Navbar.Text>
            Hi {props.userInSession.email}!
          </Navbar.Text>
          <Nav>
          <Nav.Link as={Link} to="/profile" href="/profile">Profile</Nav.Link>
          <Nav.Link as={Link} to="/plan" href="/plan">Plan</Nav.Link>
          <Nav.Link as={Link} to="/nutrition" href="/nutrition">Nutrition</Nav.Link>
          <Nav.Link as={Link} to="/donate" href="/donate">Donate</Nav.Link>
          <Nav.Link as={Link} to="/" href="/" onClick={() => logoutUser(props)}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

}

export default NavTop;