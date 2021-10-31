import React from "react";
import Menu from "./../common/navBar/menuItem";
import {
  MenuButton,
  NavLogo,
  NavLogoLink,
  NavMenu,
  Widthleft,
  Widthright,
  StyleLink,
  NavBarComponent,
} from "./navBar.styles";

const NavBar = () => {
  const titleList = [
    {
      title: "Themes",
      toHref: "/themes",
    },
    {
      title: "Documentations",
      toHref: "/documentations",
    },
    {
      title: "Showcase",
      toHref: "/showcase",
    },
    {
      title: "Blog",
      toHref: "/blog",
    },
    {
      title: "Contact",
      toHref: "/contact",
    },
  ];
  return (
    <>
      <NavBarComponent>
        <Widthleft>
          <NavLogo>
            <NavLogoLink to="/">Aspire Labs</NavLogoLink>
          </NavLogo>
        </Widthleft>
        <Widthright>
          <nav>
            <NavMenu>
              <Menu
                titleList={titleList}
                classActive="actived"
                color="#181818"
              />
              <MenuButton>
                <StyleLink to="/getall">Get all themes</StyleLink>
              </MenuButton>
            </NavMenu>
          </nav>
        </Widthright>
      </NavBarComponent>
    </>
  );
};

NavBar.propTypes = {};

export default NavBar;
