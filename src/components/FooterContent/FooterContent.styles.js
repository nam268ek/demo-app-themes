import { Link } from "react-router-dom";
import styled from "styled-components";

export const Layout = styled.div`
  padding-top: 64px;
`;
export const ColumLink = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const Colum = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 33.33%;
  padding-bottom: 32px;

  @media (max-width: 768px) {
    width: 50%;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;
export const StyleLink = styled(Link)`
  color: #525252;
  display: block;
  margin-bottom: 8px;
  padding-bottom: 8px;
  font-size: ${(props) => props.secondary && "14px"};

  text-decoration: underline;
  text-underline-offset: 4px;
  color: #525252;
`;
export const Input = styled.input`
  padding: 16px 20px;
  width: 100%;
  border: 1px solid #d2d2d7;
  border-radius: 3px;
`;
export const Copy = styled.div`
  padding: 14px 0;
  border-top: 1px solid #e5e5e5;
`;
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const CopyText = styled.div`
  color: #525252;
  font-size: 14px;
  margin: 0;
`;
export const CopyLink = styled.div`
  display: flex;
  column-gap: 8px;
`;
export const Form = styled.form``;
export const TagP = styled.p`
  margin-bottom: 16px;
`;
