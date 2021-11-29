import { Link } from "react-router-dom";
import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    display: block;
  }
`;
export const Content = styled.div`
  width: 50%;
  padding: 0 17px;

  @media (max-width: 768px) {
    width: 100%;
    ${({ primary }) =>
      primary &&
      `
    display: flex;
    justify-content: center;
    `}
  }
`;
export const Title = styled.h1`
  font-size: 54px;
  line-height: 1.2;
  margin-bottom: 8px;
  font-weight: 800;
  background-color: #910630;
  background-image: linear-gradient(150deg, #3803ca, #f1731e);
  background-size: 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 1023px) {
    font-size: 45px;
  }

  @media (max-width: 768px) {
    font-size: 30px;
    margin-bottom: 16px;
  }
`;
export const TagP = styled.p`
  font-size: 20px;
  margin-bottom: 24px;
`;
export const StyleLink = styled(Link)`
  padding: 16px 32px;
  background-color: #001fff;
  color: white;
  text-decoration: none;
  font-weight: 500;
  border-radius: 2px;
  display: inline-block;

  &:hover {
    color: white;
    background-color: #04c;
  }
  &:focus {
    outline-offset: 2px;
    outline: 2px solid #04c;
  }
`;
export const ListNote = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  list-style-type: none;
  margin-left: 0;
  padding-left: 0;
  margin-top: 8px;
`;
export const ListNoteItem = styled.li`
  font-size: 12px;
  font-weight: 500;
  text-align: left;
  margin-right: 16px;
`;
export const Span = styled.span`
  margin-right: 4px;
`;
export const Image = styled.img`
  width: 100%;
  max-width: 552px;
  display: block;
  object-fit: contain;

  @media (max-width: 768px) {
    object-fit: contain;
  }
`;
