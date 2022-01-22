import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Layout = styled.div`
  margin: 0;
  padding: 64px 0;
  background-color: #f5f5f5;
`;
export const Content = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const Center = styled.div`
  display: flex;
  justify-content: center;
`;
export const DivLeft = styled.div`
  width: 85%;

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 375px) {
    width: 70%;
  }
`;
export const DivRight = styled.div`
  width: 15%;

  @media (max-width: 768px) {
    width: 20%;
  }

  @media (max-width: 375px) {
    width: 30%;
  }
`;
export const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
  line-height: calc(32px * 1.25);
  margin-right: 24px;

  @media (max-width: 768px) {
    font-size: 20px;
    line-height: calc(20px * 1.25);
    font-weight: 500;
  }

  @media (max-width: 375px) {
    font-size: 20px;
    line-height: calc(20px * 1.25);
    font-weight: 400;
  }
`;
export const Highlight = styled.span`
  background-color: #ffef95;
`;
export const StyleLink = styled(Link)`
  display: inline-block;
  color: #181818;
  font-weight: 500;
  text-decoration: underline;
  text-underline-offset: 4px;
  padding-top: 14px;
  &:hover {
    color: #001fff;
  }
`;
export const TagP = styled.p`
  padding-top: 8px;
`;
export const Image = styled.img`
  display: block;
  width: 100%;
  max-width: 112px;
  max-height: 112px;
  object-fit: cover;
  border-radius: 10px;
`;
