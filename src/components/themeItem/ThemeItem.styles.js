import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Layout = styled.div`
  width: 100%;
  padding: 0;
  margin: 0;
`;
export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 32px;
`;
export const Col75 = styled.div`
  width: calc(100% - (100% / 3));
  padding: 0 16px;
  margin: 0;
`;
export const Col25 = styled.div`
  width: calc(100% / 3);
  padding: 0 16px;
  margin: 0;
`;
export const ImageItem = styled.img`
  width: 100%;
  object-fit: cover;
  background-color: #fafafa;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
`;
export const Description = styled.p`
  font-size: 16px;
  line-height: 1.5;
`;
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: ${(props) =>
    props.className === "secondary" ? 0 : "1px solid #eaeaea"};
  padding: 24px;
  margin-bottom: 24px;
  align-items: ${(props) =>
    props.className === "secondary" ? "flex-start" : "center"};
  background-color: ${(props) =>
    props.className === "secondary" ? "#fafafa" : "#fff"};
`;
export const StyleLink = styled(NavLink)`
  padding: 16px 32px;
  background-color: ${(props) => (props.primary ? "#001fff" : "#ffffff")};
  color: ${(props) => (props.primary ? "#ffffff" : "#001fff")};
  font-weight: ${(props) => (props.primary ? "600" : "400")};
  border: 1px solid #001fff;
  border-radius: 2px;
  display: block;
  margin-bottom: 16px;
  text-align: center;
  width: 100%;
  text-decoration: none;

  &:hover {
    background-color: ${(props) => (props.primary ? "#04c" : "#fafafa")};
    color: ${(props) => (props.primary ? "#ffffff" : "#001fff")};
  }

  &:focus {
    outline-offset: 2px;
    outline: 2px solid #001fff;
  }
`;
export const HighLight = styled.span`
  background-color: #ffef95;
  padding: 5px 10px;
  color: #181818;
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 8px;
  display: block;
  width: fit-content;
`;
export const Note = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: #525252;
`;

export const BoxItem = styled.p`
  font-size: 14px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-block-end: inherit;
  padding-bottom: 16px;
`;
export const Item = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const CustomItem = styled(Item)`
  font-size: 14px;
  color: #525252;
  font-weight: 400;
`;
export const CustomBoxItem = styled(BoxItem)`
  margin-bottom: 0;
  padding-bottom: 0;
  border-block-end: 0;
`;
export const Content = styled.div`
  width: 33.33%;
  padding: 0 16px;
  display: flex;
`;
export const DivImage = styled.div`
  width: 100%;
`;
export const TagP = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 0;
`;
export const CustomImage = styled.img`
  width: 10%;
  object-fit: cover;
  object-position: top;
`;
