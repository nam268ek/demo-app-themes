import Menu from "components/common/navBar/menuItem";
import { logOut } from "features/Login/loginSlice";
import { Container } from "globalStyles";
import React from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
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
  User,
  Image,
  UserLink,
  DropDown,
  LinkItem,
  Hr,
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
  const navigate = useNavigate();
  const totalQty = useSelector((state) => state.carts.qty);
  const { user, token: isUser } = useSelector((state) => state.login);

  const [isOpen, setIsOpen] = React.useState(false);
  const dispatch = useDispatch();
  const showMenuRef = React.useRef(null);

  const handleNote = () => {
    toast.configure();
    // toast.info("Feature under construction.", { theme: "colored" });
  };

  const handleMenu = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    toast.configure();

    setIsOpen(false);
    dispatch(logOut());
  };

  React.useEffect(() => {
    // handle click outside close menu
    const handleClickOutside = (e) => {
      if (showMenuRef.current && !showMenuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    isUser && window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isUser]);

  //handle click personal infomation
  const handleNavigate = (e) => {
    e.preventDefault();
    navigate(`/user`, { replace: true });
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
                {!isUser && (
                  <MenuButton>
                    <StyleLink to="login" onClick={handleNote}>
                      Login &#10072; Register
                    </StyleLink>
                  </MenuButton>
                )}
                <Cart>
                  <CartLink to="cart">
                    <CartContent>
                      {totalQty > 0 && <CartCount>{totalQty}</CartCount>}
                      <RiShoppingCartLine size={30} />
                    </CartContent>
                  </CartLink>
                </Cart>
                {isUser && (
                  <User>
                    <UserLink to="" ref={showMenuRef} onClick={handleMenu}>
                      <Image
                        width={35}
                        height={35}
                        src="https://res.cloudinary.com/ds6y4vgjb/image/upload/v1638839543/icons8-user-64_igxpij.png"
                      />
                    </UserLink>
                    <DropDown isOpen={isOpen}>
                      <LinkItem to="" onClick={handleNavigate}>
                        Personal
                      </LinkItem>
                      <Hr />
                      <LinkItem to="" onClick={handleLogout}>
                        Logout
                      </LinkItem>
                    </DropDown>
                  </User>
                )}
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
