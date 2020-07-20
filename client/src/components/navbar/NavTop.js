import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { logout } from '../../services/api.js'
// import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import './NavTop.scss'


const logoutUser = (props) =>{
  logout()
  .then(() => {
    props.updateUser(null);  // sets the global user object to 'null'
  })
}



const NavTop = (props) => {

  // const [isOpen, setIsOpen] = useState(false);

  // const toggle = () => setIsOpen(!isOpen);

  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);


  if (!props.userInSession) { // when user is logged OUT
    return (   
    <div>
      <Navbar collapseOnSelect expand='xs' color='light' className="navtop-background-color" light>
        <Navbar.Brand href="/">ShapeIt</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" 
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
          <Nav.Link as={Link} to="/login" href="/login">Login</Nav.Link>
          {/* <Nav.Link href="http://localhost:5000/api/google">Login with google</Nav.Link> */}
          <Nav.Link as={Link} to='/signup' href="/signup">Signup</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
    )
  } else { // when user is logged IN
    return (
    <div>
      <Navbar collapseOnSelect expand='xs' color='light' className="navtop-background-color" light>
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