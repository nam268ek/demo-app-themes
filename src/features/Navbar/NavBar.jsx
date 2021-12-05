import Menu from "components/common/navBar/menuItem";
import { Container } from "globalStyles";
import React from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
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
  Icon,
} from "./NavBar.styles";

const NavBar = ({ handleClickOpen }) => {
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

  const handleNote = () => {
    toast.configure();
    toast.info("Feature under construction.", { theme: "colored" });
  };

  return (
    <Header>
      <Container>
        <NavBarComponent>
          <Widthleft>
            <NavLogo>
              <NavLogoLink to="/">Aspire Labs</NavLogoLink>
            </NavLogo>
          </Widthleft>
          <Icon onClick={handleClickOpen}>&#9776;</Icon>
          <Widthright>
            <nav>
              <NavMenu onClick={handleClickOpen}>
                <Menu
                  titleList={titleList}
                  classActive="actived"
                  color="#181818"
                />
                <MenuButton>
                  <StyleLink to="login" onClick={handleNote}>
                    Login &#10072; Register
                  </StyleLink>
                </MenuButton>
                <Cart>
                  <CartLink to="cart">
                    <CartContent>
                      {totalQty > 0 && <CartCount>{totalQty}</CartCount>}
                      <RiShoppingCartLine size={30} />
                    </CartContent>
                  </CartLink>
                </Cart>
              </NavMenu>
            </nav>
          </Widthright>
        </NavBarComponent>
      </Container>
    </Header>
  );
};

NavBar.propTypes = {};

export default NavBar;
