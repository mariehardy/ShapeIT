import React from "react";
import { Link } from "react-router-dom";
// nodejs library that concatenates strings
import classnames from "classnames";
import shapeitLogo from '../../assets/img/shapeIT/shapeit-logo-white-svg.svg';

import { logout } from '../../services/api.js';

// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";





function NavbarTop(props) {

  const logoutUser = (props) =>{
    logout()
    .then(() => {
      props.updateUser(null);  // sets the global user object to 'null'
    })
  }

  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });


  if (!props.userInSession) { // when user is logged OUT
    return (   
    <div>
    <Navbar
      className={classnames("fixed-top", navbarColor)}
      color-on-scroll="300"
      expand="lg"
    >
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            to="/"
            // target="_blank"
            title="ShapeIT"
            tag={Link}
          >
            <img src={ shapeitLogo } alt="Shape IT logo" />
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <NavLink to="/login" tag={Link} href="/login"
              onClick={toggleNavbarCollapse}>
                <i className="nc-icon nc-layout-11" /> Login
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/signup" tag={Link} href="/signup"
              onClick={toggleNavbarCollapse}>
                <i className="nc-icon nc-layout-11" /> Sign up
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
    </div>
    )
    } else {
        return (
        <div>
            <Navbar
      className={classnames("fixed-top", navbarColor)}
      color-on-scroll="300"
      expand="lg"
    >
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            to="/"
            // target="_blank"
            title="ShapeIT"
            tag={Link}
          >
            <img src={ shapeitLogo } alt="Shape IT logo" />

          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <NavLink to="/profile" tag={Link} href="/profile"
              onClick={toggleNavbarCollapse}>
                Profile
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/plan" tag={Link} href="/plan"
              onClick={toggleNavbarCollapse}>
                Plan
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/nutrition" tag={Link} href="/nutrition"
              onClick={toggleNavbarCollapse}>
                Nutrition
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/donate" tag={Link} href="/donate"
              onClick={toggleNavbarCollapse}>
                Donate
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/" tag={Link} href="/" onClick={() => logoutUser(props)}>
                Log out
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
        </div>
        )
      }
}

export default NavbarTop;


/*!

=========================================================
* Paper Kit React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/