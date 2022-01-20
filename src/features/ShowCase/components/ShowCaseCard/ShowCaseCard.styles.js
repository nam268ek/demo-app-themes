import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

export const Layout = styled.div`
  ${(props) => props.isExist === "/" && `padding: 64px 0;`};
`;
export const Content = styled.div``;

export const Header = styled.div`
  padding: 0 14px;
  width: 100%;
`;
export const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  line-height: 30px;
  margin-bottom: 5px;
`;
export const BodyContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 16px;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    display: block;
    padding: 0 14px;
  }
`;
export const TagP = styled.p`
  font-size: 18px;
  margin-bottom: 5px;
  color: #525252;
`;
export const StyleLink = styled(Link)`
  text-decoration: underline;
  text-underline-offset: 4px;
  color: $color-text;
  margin-bottom: 5px;
`;
export const DivButton = styled.div`
  padding: 0 16px;
`;
export const LinkItemButton = styled(Link)`
  display: inline-block;
  border: 1px solid #1608d6;
  border-radius: 2px;
  padding: 8px 24px;
  color: #1608d6;
  font-size: 14px;
  text-decoration: none;
  margin-right: 16px;
  margin-bottom: 32px;
  font-weight: 500;
  &:hover {
    background-color: #fafafa;
  }
  &:focus {
    outline-offset: 2px;
    outline: 2px solid #1608d6;
  }
`;
export const DivCard = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
export const ItemCard = styled.div`
  width: 33.33%;
  padding: 0 16px;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    width: 50%;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;
export const StyleLinkItem = styled(Link)`
  width: 100%;
  display: block;
  padding: 2px;
  background-color: #fafafa;
  border-radius: 2px;
  &:hover {
    background-color: #001fff;
  }
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;
export const placeHolderShimmer = keyframes`
0% {
    background-position: -468px 0;
}
100% {
    background-position: 468px 0;
}
`;
export const PlaceHolder = styled.div`
  width: 100%;
  height: 284px;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: ${placeHolderShimmer};
  animation-timing-function: linear;
  background: linear-gradient(to right, #f6f6f6 8%, #f0f0f0 18%, #f6f6f6 33%);
`;
