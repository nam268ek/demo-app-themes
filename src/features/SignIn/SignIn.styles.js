import { Link } from "react-router-dom";
import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  justify-content: center;
`;
export const Box = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  max-width: 28em;
  width: 100%;
  border-radius: 20px;
  background-color: #fcfcfc;
  box-shadow: 0px 0px 10px 5px rgba(224, 224, 224, 0.25);
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 400px;
`;
export const Title = styled.h1`
  font-size: 36px;
  font-weight: 600;
  color: #292929;
  width: 100%;
  text-align: center;
  padding-top: 32px;
  padding-bottom: 10px;
`;
export const TitleH2 = styled.h2`
  font-size: 16px;
  font-weight: 600;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 20px;
  width: 100%;
`;
export const StyleLink = styled(Link)`
  font-size: 16px;
  font-weight: 600;
  color: #164ada;
  text-decoration: ${(props) => (props.primary ? "underline" : "none")};
  padding: ${(props) => (props.primary ? "0 0 0 5px" : "0 0 0 0")};
  text-underline-offset: 4px;
`;
export const CustomDiv = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.primary ? "row" : "column")};
  justify-content: ${(props) => (props.primary ? "unset" : "center")};
  align-items: center;
  width: ${(props) =>
    props.primary ? "100%" : props.w0 ? "auto" : props.w50 && "50%"};
  margin-bottom: ${(props) => props.m0 && "0"};
  margin: ${(props) => (props.primary ? "0 0 16px 0" : "0 0 0 0")};
  padding-right: ${(props) => props.pr || "0 0 0 0"};
  padding-top: ${(props) => props.pt || "0 0 0 0"};
  padding-bottom: ${(props) => props.pb || "0 0 0 0"};
`;
export const Form = styled.form`
  width: 100%;
`;
export const Input = styled.input`
  border-radius: 5px;
  border: 1px solid #d4d4d4;
  padding: 10px 0;
  padding-left: 14px;
  width: ${(props) => (props.secondary ? "50%" : "100%")};
  border-top-right-radius: ${(props) => props.one && "0"};
  border-bottom-right-radius: ${(props) => props.one && "0"};
  border-top-left-radius: ${(props) => props.two && "0"};
  border-bottom-left-radius: ${(props) => props.two && "0"};

  &:active {
    border-top-right-radius: ${(props) => props.one && "0"};
    border-bottom-right-radius: ${(props) => props.one && "0"};
    border-top-left-radius: ${(props) => props.two && "0"};
    border-bottom-left-radius: ${(props) => props.two && "0"};
  }
`;
export const Button = styled.button`
  width: 100%;
  padding: 8px 16px;
  background-color: #001fff;
  color: #ffffff;
  font-weight: 600;
  border: 1px solid #001fff;
  border-radius: 2px;
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 16px;
  justify-content: center;
  margin-bottom: 32px;

  &:hover {
    color: white;
    background-color: #04c;
  }

  &:focus {
    outline-offset: 2px !important;
    outline: 2px solid #04c !important;
  }
`;
export const CheckBox = styled.input.attrs({ type: "checkbox" })`
  background-color: #ececec;
  border-radius: 5px;
  border: 1px solid #d4d4d4;
  width: 18px;
  height: 18px;
`;
export const TagP = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #525252;
  margin: 0;
  padding-left: 14px;
  padding-bottom: 32px;
`;
