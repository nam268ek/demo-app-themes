import React from "react";
import "./navBar.scss";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
} from "reactstrap";

const NavBar = () => {
  return (
      <Navbar className="navbar__gird-center" light expand="md">
        <NavbarBrand href="/" className="navbar__logo-link">Aspire Themes</NavbarBrand>
        <Collapse className="navbar__collapse" navbar>
          <Nav className="mr-auto" navbar>
            <NavItem  className="navbar__item">
              <NavLink href="/themes/" className="navbar__link">Themes</NavLink>
            </NavItem>
            <NavItem className="navbar__item">
              <NavLink href="/documentations/" className="navbar__link">Documentations</NavLink>
            </NavItem>
            <NavItem className="navbar__item">
              <NavLink href="/showcase/" className="navbar__link">Showcase</NavLink>
            </NavItem>
            <NavItem className="navbar__item">
              <NavLink href="/blog/" className="navbar__link">Blog</NavLink>
            </NavItem>
            <NavItem className="navbar__item">
              <NavLink href="/contact/" className="navbar__link">Contact</NavLink>
            </NavItem>
            <NavItem className="navbar__item">
              <NavLink className="navbar__btn--small" href="/getallthemes/">Get all themes</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
  );
};

NavBar.propTypes = {};

export default NavBar;
