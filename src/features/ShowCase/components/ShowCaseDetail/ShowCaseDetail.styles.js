import styled from "styled-components";
import { Link } from "react-router-dom";

export const Span = styled.span`
  font-size: 20px;
  margin: ${(props) => (props.primary ? "0 5px" : "0 0 0 0")};
  color: #525252;
`;
export const Layout = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;
export const CustomDiv = styled.div`
  display: ${(props) => (props.primary ? "flex" : "block")};
  align-items: ${(props) => (props.primary ? "baseline" : "unset")};
  width: 100%;
  margin: ${(props) => (props.primary ? "0 0 24px 0" : "0 0 0 0")};
  padding: ${(props) => props.padding || "unset"};
`;
export const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
`;
export const Item = styled.div`
  width: calc(100% / 3);
  padding: 0 16px;
  margin-bottom: 32px;

  @media (max-width: 1023px) {
    width: calc(100% / 2);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const StyleLink = styled(Link)`
  font-size: ${(props) => (props.primary ? "2em" : "14px")};
  line-height: 1.5;
  color: ${(props) => (props.primary ? "#181818" : "#525252")};
  text-transform: ${(props) => (props.primary ? "unset" : "uppercase")};
  width: ${(props) => (props.primary ? "auto" : "100%")};
  font-weight: ${(props) => (props.primary ? 600 : "unset")};
  display: block;
  text-decoration: ${(props) => (props.primary ? "underline" : "none")};
  text-underline-offset: ${(props) => (props.primary ? "4px" : "0px")};
  padding: ${(props) => props.padding || "unset"};

  &:hover {
    color: #001fff;
    text-decoration: underline;
    text-underline-offset: 4px;
  }
`;
export const Image = styled.img`
  width: 100%;
  height: auto;
  max-width: 354px;
  object-fit: contain;
`;
