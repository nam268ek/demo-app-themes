import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

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
  column-gap: 5px;
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
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 16px;
  ${({ primary }) =>
    primary &&
    `
    flex-direction: row;
    width: 100%;
    margin-bottom: 16px;
  `}
  ${({ mb0 }) =>
    mb0 &&
    `
    margin-bottom: 0;
  `}
  ${({ w50 }) =>
    w50 &&
    `
    width: 50%;
    margin: 0;
  `}
   ${({ row }) =>
    row &&
    `
    column-gap: 8px;
    flex-direction: row;
    flex-wrap: nowrap;
  `}
   ${({ term }) =>
    term &&
    `
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: flex-start;
  `}
`;
export const Form = styled.form`
  width: 100%;
`;
export const Input = styled.input`
  border-radius: 5px;
  border: 1px solid #d4d4d4;
  padding: 10px 0;
  font-size: 100%;
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
  
  ${props=>props.disabled && `
    background-color: #e7e7e7;

  `}
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
  margin-bottom: 12px;
  text-transform: uppercase;

  &:hover {
    color: white;
    background-color: #04c;
  }

  &:focus {
    outline-offset: 2px !important;
    outline: 2px solid #04c !important;
  }
`;
export const StyleButton = styled.p`
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
  margin-bottom: 12px;
  text-transform: uppercase;
  cursor: pointer;
  
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
  width: 100%;
`;
export const MessageError = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #04c;
  margin: 0;
  padding-top: 5px;
  display: flex;
  align-items: center;
  column-gap: 5px;
`;
export const Span = styled.span`
  padding: 0;
  margin: 0;
`;
export const spin = keyframes`
  0% {
    transform: rotate(0); }
  100% {
    transform: rotate(360deg); } 
`;
export const Loader = styled.div`
  height: 1.2em;
  width: 1.2em;
  color: rgba(90, 90, 90, 0.2);
  position: relative;
  display: inline-block;
  border: 3.5px solid;
  border-radius: 50%;
  border-right-color: #5a5a5a;
  animation: ${spin} 0.6s linear infinite;
`;
