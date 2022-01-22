import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Layout = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const DivImage = styled.div`
  padding: 0 16px;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 357px;
  max-height: 255px;
  object-fit: contain;
`;
export const Content = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Title = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
`;
export const Desc = styled.p``;
export const StyleLink = styled(Link)`
  color: #181818;
`;
