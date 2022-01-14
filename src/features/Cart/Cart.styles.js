import { Link } from "react-router-dom";
import styled from "styled-components";

export const Layout = styled.div`
  width: 100%;
  height: 100%;
  min-height: 61vh;
`;

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  ${(props) => (props.flex ? "display: flex; flex-wrap: wrap;" : "block")};
`;

export const ContentCheckOut = styled.div`
  width: calc(100% * 1 / 3);

  @media (max-width: 1023px) {
    width: 100%;
  }
`;
export const ContentCart = styled.div`
  width: calc(100% * 2 / 3);

  @media (max-width: 1023px) {
    width: 100%;
  }
`;
export const Title = styled.h1`
  font-size: 22px;
  font-weight: 600;
  line-height: 1.5;
  color: #181818;
  padding: 10px 16px;
  margin-bottom: 32px;
  width: 100%;
  background-color: ${(props) => props.bg || "#fafafa"};
  border-left: groove;
`;

export const Item = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 16px;
  padding: 0 14px;
`;
export const Preview = styled.div`
  display: block;
  position: relative;
  background-color: #fafafa;
  height: 100%;
`;
export const PreviewImg = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: contain;
`;
export const CartInfo = styled.div`
  display: flex;
  width: calc(100% * 3 / 4);
  margin-bottom: 16px;
  padding: 0 16px;

  @media (max-width: 1023px) {
    width: 100%;
  }
`;
export const Desc = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 1023px) {
    width: 100%;
  }
`;
export const Price = styled.div`
  width: calc(100% / 3);
  display: flex;
  justify-content: flex-end;
`;
export const NameTheme = styled.h1`
  font-size: 22px;
  font-weight: 600;
  line-height: 1.5;
  margin: 0;
  display: flex;
  justify-content: space-between;
`;
export const AboutTheme = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: rgb(117, 117, 117);
  text-overflow: ellipsis;
  height: 45px;
  overflow: hidden;
`;
export const CustomDiv = styled.div`
  display: flex;
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  align-items: ${(props) => props.alignItems || "flex-start"};
  flex-direction: ${(props) => props.flexDirection || "row"};
  padding: ${(props) => props.padding || "0"};
  margin: ${(props) => props.margin || "0"};
  ${(props) =>
    props.qty &&
    `
    align-items: center;
    padding-top: 10px;
  `}
`;
export const Qty = styled.input.attrs({ type: "number" })`
  outline: none;
  width: 40px;
  height: 26px;
  text-align: center;
  border: 1px solid #ced4da;
  border-radius: 0;
  border-left: 0;
  border-right: 0;
  font-size: 100%;
  font-weight: 500;

  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &:visited {
    border: 1px solid #ced4da;
  }
  &:active {
    border: 1px solid #ced4da;
  }
`;
export const Remove = styled.button`
  padding: 8px 16px;
  background-color: #001fff;
  color: #ffffff;
  font-weight: 600;
  border: 1px solid #001fff;
  border-radius: 2px;
  display: flex;
  align-items: center;
  text-align: center;
  height: 26px;
  font-size: 16px;
  margin-left: 16px;
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
export const Label = styled.label`
  font-size: 16px;
  font-weight: 400;
  color: rgb(117, 117, 117);
  padding-right: 16px;
  height: 100%;
`;
export const Button = styled.button`
  color: #181818;
  font-weight: 600;
  border: 1px solid #ced4da;
  display: flex;
  border-top-left-radius: ${(props) => (props.btlr ? "2px" : "0")};
  border-bottom-left-radius: ${(props) => (props.btlr ? "2px" : "0")};
  border-top-right-radius: ${(props) => (props.btrr ? "2px" : "0")};
  border-bottom-right-radius: ${(props) => (props.btrr ? "2px" : "0")};
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 30px;
  height: 26px;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;

  &:hover {
    background-color: #001fff;
    color: #ffffff;
    border-top-left-radius: ${(props) => (props.btlr ? "2.1px" : "0")};
    border-bottom-left-radius: ${(props) => (props.btlr ? "2.1px" : "0")};
    border-top-right-radius: ${(props) => (props.btrr ? "2.1px" : "0")};
    border-bottom-right-radius: ${(props) => (props.btrr ? "2.1px" : "0")};
  }
`;
export const TitlePrice = styled.p`
  font-size: 22px;
  font-weight: 600;
  line-height: 1.5;
  color: #181818;
  margin: 0;
  height: fit-content;
`;

export const ThemeLink = styled(Link)`
  text-decoration: none;
  display: block;
  position: relative;
  padding: 0 16px;
  width: calc(100% * 1 / 4);
  margin-bottom: 16px;

  @media (max-width: 640px) {
    display: none;
  }
`;
export const Hr = styled.hr`
  margin: 0 30px 32px;
  padding: 0;
  height: 1px;
  background-color: #e6e6e6;
  border: 0;
  opacity: 0.55;
`;
export const CustomBtn = styled(Remove)`
  height: 100%;
  width: ${(props) => props.width || "100%"};
  display: inline-block;
  text-align: center;
  margin: 0;
  font-size: 18px;

  ${(props) => props.primary && `
  text-transform: uppercase;
  cursor: pointer;
  `}
`;
export const CustomBtnSecondary = styled.button`
  background-color: white;
  display: block;
  border: 1px solid #1608d6;
  border-radius: 2px;
  padding: 8px 24px;
  font-size: 14px;
  font-weight: 500;
  color: #001fff;
  width: 100%;
  text-align: center;
  margin-bottom: 16px;

  &:hover {
    background-color: #f5f5f5;
  }

  &:focus {
    outline-offset: 2px;
    outline: 2px solid #1608d6 !important;
  }
`;
export const CustomTitle = styled(Title)`
  padding: ${(props) => props.padding || "0"};
  margin: ${(props) => props.margin || "0"};
  background-color: ${(props) => props.backgroundColor || "white"};
  text-align: ${(props) => props.textAlign || "left"};
  border: ${(props) => props.border || "none"};
`;

export const CustomImage = styled.img`
  width: 100%;
  max-width: 265px;
  height: fit-content;
  object-fit: contain;
  object-position: top;
`;
export const DivImage = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 16px;
`;
