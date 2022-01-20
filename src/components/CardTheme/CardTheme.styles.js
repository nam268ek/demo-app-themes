import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

export const Layout = styled.div`
  ${(props) => props.isExist === "/" && `padding: 64px 0;`};
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 14px;
`;
export const Header = styled.div`
  padding: 0 14px;
  width: 100%;
`;
export const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  line-height: 30px;
  margin-bottom: 24px;
`;
export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;
export const StyleLink = styled(Link)`
  display: inline-block;
  text-align: center;
  text-decoration: none;
  background-color: #f5f5f5;
  width: 100%;
  padding: 24px;
`;
export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 14px;
  margin-bottom: 28px;
  width: 50%;

  @media (max-width: 767px) {
    width: 100%;
  }
`;
export const Info = styled.p`
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  color: #181818;
  &:hover {
    color: #001fff;
  }
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
export const Image = styled.img`
  max-width: 504px;
  max-height: 284px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: inline-block;

  @media (max-width: 768px) {
    object-fit: contain;
    max-width: 294px;
    width: 100%;
  }
`;
