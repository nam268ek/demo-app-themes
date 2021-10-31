import { NavLink } from "react-router-dom";
import styled from "styled-components";

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
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 16px;
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
`;
export const NavLogo = styled.div`
  display: flex;
`;
export const Widthleft = styled.div`
  width: 25%;
  padding: 0 16px;
`;
export const Widthright = styled.div`
  width: 75%;
  padding: 0 16px;
`;
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
`;

export const MenuButton = styled.li`
  list-style: none;
  line-height: 1;
`;
export const StyleLink = styled(NavLink)`
  display: block;
  border: 1px solid #1608d6;
  border-radius: 2px;
  padding: 8px 24px;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  color: #001fff;
  &:hover {
    background-color: #f5f5f5;
    text-decoration: none;
  }
  &:focus {
    outline-offset: 2px;
    outline: 2px solid #1608d6;
  }
`;
