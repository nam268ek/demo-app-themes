import styled from "styled-components";
import { Link } from "react-router-dom";

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #333;
  padding: 0 14px;
  margin-bottom: 24px;
`;
export const BoxContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 3;
`;
export const Card = styled.div`
  padding: 0 16px;
  width: 33.33%;

  @media (max-width: 768px) {
    width: 50%;
  }

  @media (max-width: 375px) {
    width: 100%;
  }
`;
export const StyleLink = styled(Link)`
  display: block;
  width: 100%;
  text-decoration: none;
  color: #181818;
  font-size: 18px;
  font-weight: 600;
  padding: 32px;
  text-align: center;
  margin-bottom: 32px;
  background-color: #fafafa;
  &:hover {
    color: blue;
  }
`;
export const Version = styled.sup`
  font-size: 12px;
  color: #525252;
  padding: 0 5px;
`;
