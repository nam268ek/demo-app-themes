import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.div`
  padding: 0 16px;
  padding-top: 64px;
`;
export const Title = styled.h2`
  font-size: 24px;
  margin: 0;
  font-weight: 500;
  line-height: 1.2;
`;
export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const Span = styled.span`
  font-size: 18px;
  color: #525252;
  margin-bottom: 8px;
`;
export const LinkPrimary = styled(Link)`
  text-decoration: underline;
  text-underline-offset: 4px;
  color: #181818;
`;
export const StyleLink = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fafafa;
  text-decoration: none;
  text-underline-offset: 4px;
  color: #181818;
`;
export const Content = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
`;
export const Item = styled.div`
  padding: 0 14px;
  width: 33.33%;
  display: flex;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    width: 50%;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;
export const ImageItem = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56%;
`;
export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  object-position: top;
`;
export const InfoItem = styled.div`
  padding: 40px 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;
export const TitleItem = styled.h3`
  font-size: 20px;
  font-weight: 600;
`;
export const ContentItem = styled.p`
  font-size: 14px;
  color: #181818;
  margin-top: 8px;
`;
export const DateTimeItem = styled.time`
  color: #525252;
  font-size: 12px;
  font-weight: 500;
  margin-top: 8px;
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
