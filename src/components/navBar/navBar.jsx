import React from "react";
import { Link } from "react-router-dom";
import { Collapse, Nav, Navbar, NavItem } from "reactstrap";

import "./navBar.scss";

const NavBar = () => {
  return (
    <Navbar className="navbar__gird-center" light expand="md">
      <Link to="/" className="navbar__logo-link navbar-brand">
        Aspire Labs
      </Link>
      <Collapse className="navbar__collapse" navbar>
        <Nav className="mr-auto" navbar>
          <NavItem className="navbar__item">
            <Link to="/themes" className="navbar__link nav-link">
              Themes
            </Link>
          </NavItem>
          <NavItem className="navbar__item">
            <Link to="/documentations" className="navbar__link nav-link">
              Documentations
            </Link>
          </NavItem>
          <NavItem className="navbar__item">
            <Link to="/showcase" className="navbar__link nav-link">
              Showcase
            </Link>
          </NavItem>
          <NavItem className="navbar__item">
            <Link to="/blog" className="navbar__link nav-link">
              Blog
            </Link>
          </NavItem>
          <NavItem className="navbar__item">
            <Link to="/contact" className="navbar__link nav-link">
              Contact
            </Link>
          </NavItem>
          <NavItem className="navbar__item">
            <Link className="navbar__btn--small" to="/getallthemes">
              Get all themes
            </Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

NavBar.propTypes = {};

export default NavBar;
