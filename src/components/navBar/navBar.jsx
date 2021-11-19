import Menu from "components/common/navBar/menuItem";
import React from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import {
  MenuButton,
  NavLogo,
  NavLogoLink,
  NavMenu,
  Widthleft,
  Widthright,
  StyleLink,
  NavBarComponent,
  Cart,
  CartLink,
  CartContent,
  CartCount,
  Header,
} from "./navBar.styles";

const NavBar = () => {
  const titleList = [
    {
      title: "Themes",
      toHref: "themes",
    },
    {
      title: "Documentations",
      toHref: "documentations",
    },
    {
      title: "Showcase",
      toHref: "showcase",
    },
    {
      title: "Blog",
      toHref: "blog",
    },
    {
      title: "Contact",
      toHref: "contact",
    },
  ];
  const totalQty = useSelector((state) => state.carts.qty);
  return (
    <Header>
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
                <StyleLink to="getall">Get all themes</StyleLink>
              </MenuButton>
              <Cart br="1px solid #f5f5f5;">
                <CartLink to="cart">
                  <CartContent>
                    <CartCount>{totalQty}</CartCount>
                    <RiShoppingCartLine size={30} />
                  </CartContent>
                </CartLink>
              </Cart>
            </NavMenu>
          </nav>
        </Widthright>
      </NavBarComponent>
    </Header>
  );
};

NavBar.propTypes = {};

export default NavBar;
