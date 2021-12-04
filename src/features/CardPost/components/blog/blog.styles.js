import styled from "styled-components";

export const Layout = styled.div`
  padding: 16px 0;
`;
export const Block = styled.div`
  padding: 0 14px;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #fafafa;
`;
export const CustomCol = styled.div`
  padding: 32px;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
    padding: 20px 32px;
  }
`;
export const TitleH1 = styled.h1`
  font-size: 2em;
  font-weight: 600;
  margin-bottom: 0;
`;
export const Span = styled.span`
  font-size: 14px;
  font-weight: 400;
`;
export const StyleLink = styled.a`
  font-size: 14px;
  font-weight: 400;
  color: #525252;
  text-decoration: underline;
  text-underline-offset: 4px;
`;
export const TagP = styled.p`
  font-size: 18px;
  color: #525252;
  margin: 0;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: row;
`;
export const Input = styled.input`
  padding: 16px 20px;
  width: 100%;
  border: 1px solid #d2d2d7;
  border-radius: 3px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right: 0;

  &:hover {
    border: 1px solid #d2d2d7;
  }
`;
export const Button = styled.button`
  display: inline-block;
  background-color: #001fff;
  color: white;
  text-align: center;
  font-weight: 500;
  padding: 16px 32px;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  text-decoration: none;
  border-style: none;

  &:hover {
    background-color: #04c;
    color: white;
  }

  &:focus {
    outline: 2px solid #001fff !important;
    outline-offset: 2px;
  }
`;
