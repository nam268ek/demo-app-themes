import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Collapse, Nav, Navbar, NavItem } from "reactstrap";

import "./navBar.scss";

const NavBar = (props) => {
  return (
    <Navbar className="navbar__gird-center" light expand="md">
      <Link to="/" className="navbar__logo-link navbar-brand">
        Aspire Labs
      </Link>
      <Collapse className="navbar__collapse" navbar>
        <Nav className="mr-auto" navbar>
          <NavItem className="navbar__item">
            <NavLink
              activeClassName="actived"
              to="/themes"
              className="navbar__link nav-link"
            >
              Themes
            </NavLink>
          </NavItem>
          <NavItem className="navbar__item">
            <NavLink
              activeClassName="actived"
              to="/documentations"
              className="navbar__link nav-link"
            >
              Documentations
            </NavLink>
          </NavItem>
          <NavItem className="navbar__item">
            <NavLink
              activeClassName="actived"
              to="/showcase"
              className="navbar__link nav-link"
            >
              Showcase
            </NavLink>
          </NavItem>
          <NavItem className="navbar__item">
            <NavLink
              activeClassName="actived"
              to="/blog"
              className="navbar__link nav-link"
            >
              Blog
            </NavLink>
          </NavItem>
          <NavItem className="navbar__item">
            <NavLink
              activeClassName="actived"
              to="/contact"
              className="navbar__link nav-link"
            >
              Contact
            </NavLink>
          </NavItem>
          <NavItem className="navbar__item">
            <NavLink className="navbar__btn--small" to="/getallthemes">
              Get all themes
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

NavBar.propTypes = {};

export default NavBar;
