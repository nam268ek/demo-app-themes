import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  background-color: #ffffff;
  padding: 40px 0;
  text-align: center;
  position: relative;

  @media (max-width: 1023px) {
    padding: 20px 0;
    transition: transform 0.3s ease-in-out;
  }
`;

export const RouteLink = styled(NavLink)`
  font-weight: 500;
  font-size: 16px;
  text-transform: none;
  font-style: normal;
  text-decoration: none;
  display: block;
  width: 100%;
  color: ${(props) => props.color};

  &:hover {
    color: rgb(60, 0, 224);
    text-decoration: underline;
    text-underline-offset: 4px;
  }

  &.${(props) => props.activeClassName} {
    color: rgb(60, 0, 224);
    text-decoration: underline;
    text-underline-offset: 4px;
  }
`;
export const NavBarComponent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (max-width: 1023px) {
    display: flex;
    flex-direction: row;
  }
`;
export const NavLogoLink = styled(NavLink)`
  font-size: 24px;
  font-style: italic;
  font-weight: 800;
  text-transform: uppercase;
  color: #181818;
  text-decoration: none;
  line-height: 1;
`;
export const MenuItem = styled.li`
  list-style: none;
  margin-right: 16px;
  line-height: 1.5;

  @media screen and (max-width: 1023px) {
    padding: 16px 0;
    border-bottom: 1px solid #f2f3f4;
  }
`;
export const NavLogo = styled.div`
  display: flex;
`;
export const Widthleft = styled.div`
  width: 25%;
  padding: 0 16px;

  @media screen and (max-width: 1023px) {
    width: 100%;
  }
`;
export const Widthright = styled.div`
  width: 75%;
  padding: 0 16px;
`;
export const NavMenu = styled.ul`
  @media screen and (min-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 0;
    padding: 0;
  }

  @media (max-width: 1023px) {
    z-index: 999;
    width: 300px;
    height: 100%;
    min-height: 100vh;
    border-left: 1px solid #f2f3f4;
    position: fixed;
    top: 0;
    right: 0;
    text-align: center;
    background-color: white;
    transition: transform 0.3s ease-in-out;
    transform: translate3d(300px, 0, 0);
  }
`;

export const MenuButton = styled.li`
  list-style: none;
  line-height: 1;

  @media screen and (max-width: 1023px) {
    padding: 16px 0;
    border-bottom: 1px solid #f2f3f4;
    display: flex;
    justify-content: center;
  }
`;

export const User = styled.li`
  list-style: none;
  line-height: 1;
  display: flex;
  flex-direction: column;
  padding: 16px 0;
  position: relative;
`;
export const UserLink = styled(Link)`
  width: 100%;
  padding: 0 36px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  position: relative;
`;
export const Image = styled.img`
  display: block;
  width: 28px;
  height: 28px;
  object-fit: cover;
  border-radius: 50%;
`;
export const DropDown = styled.div`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 55px;
  flex-direction: column;
  background-color: white;
  width: 100%;
  border: 1px solid #d6d6d66b;
  border-radius: 4px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;
export const LinkItem = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  color: #181818;
  font-weight: 600;
  padding: 14px 0;

  &:hover {
    background-color: #001fff;
    color: #f3f3f3;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;
export const Hr = styled.hr`
  height: 1px;
  background-color: #d6d6d6;
  border: 0;
  opacity: 0.3;
`;
export const StyleLink = styled(Link)`
  display: block;
  border: 1px solid #1608d6;
  border-radius: 2px;
  padding: 8px 24px;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  color: #001fff;
  width: fit-content;
  &:hover {
    background-color: #f5f5f5;
    text-decoration: none;
  }
  &:active {
    outline-offset: 2px;
    outline: 2px solid #1608d6;
  }
`;
export const Icon = styled.div`
  font-size: 23px;
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 16px;
  display: block;
  transform: translateY(-50%);

  @media only screen and (min-width: 1023px) {
    display: none;
  }
`;

export const Cart = styled.li`
  list-style: none;
  line-height: 1;
  border-right: ${(props) => props.br || "none"};

  @media screen and (min-width: 1024px) {
    border-right: 1px solid #f5f5f5;
  }

  @media screen and (max-width: 1023px) {
    padding: 16px 0;
    border-bottom: 1px solid #f2f3f4;
    display: flex;
    justify-content: center;
  }
`;

export const CartContent = styled.div`
  width: 100%;
  position: relative;
`;

export const CartLink = styled(NavLink)`
  display: block;
  color: #181818;
  padding: 0 36px;

  &:hover {
    color: #181818;
  }

  @media screen and (max-width: 1023px) {
    padding: 0;
    width: fit-content;
  }
`;
export const CartCount = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -10px;
  right: -10px;
  background: #001fff;
  color: #fff;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  font-size: 14px;
  font-weight: 500;
`;
