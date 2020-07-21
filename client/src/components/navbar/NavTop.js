import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Collapse } from 'react-bootstrap';
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
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
          {/* <div className="collapse-text"> */}
          <Nav className="mr-auto">
          <Nav.Link as={Link} to="/login" href="/login">Login</Nav.Link>
          {/* <Nav.Link href="http://localhost:5000/api/google">Login with google</Nav.Link> */}
          <Nav.Link as={Link} to='/signup' href="/signup">Signup</Nav.Link>
          </Nav>
          {/* </div> */}
        </Navbar.Collapse>
      </Navbar>
    </div>
    )
  } else { // when user is logged IN
    return (
    <div>

      <Navbar collapseOnSelect expand='lg' bg="dark" variant="dark" className="navtop-background-color" >
        <Navbar.Brand href="/">ShapeIt</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" 
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Navbar.Text>
            Hi {props.userInSession.email}!
          </Navbar.Text>
          <Nav className="mr-auto">
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




// MIR'S REACTSTRAP NAVBAR

// import React from "react";
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem
// } from "reactstrap";
// import { Link } from "react-router-dom";

// export default class NavTop extends React.Component {
//   constructor(props) {
//     super(props);

//     this.toggle = this.toggle.bind(this);
//     this.state = {
//       isOpen: false
//     };
//   }
//   toggle() {
//     this.setState({
//       isOpen: !this.state.isOpen
//     });
//   }
//   render() {
//     return (
//       <div>
//         <Navbar color="dark" dark expand="sm">
//           <Link to="/">StarWars</Link>
//           <NavbarToggler onClick={this.toggle} />
//           <Collapse isOpen={this.state.isOpen} navbar>
//             <Nav className="ml-auto" navbar>
//               <NavItem>
//                 <Link to="/weather">Weather</Link>
//               </NavItem>
//             </Nav>
//           </Collapse>
//         </Navbar>
//       </div>
//     );
//   }
// }