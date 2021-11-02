import Contact from "./../contact/contact";
import styled from "styled-components";
import { PropTypes } from "prop-types";
import { useEffect, useState } from "react";
import themeApi from "./../../api/themeApi";
import { Link } from "react-router-dom";
import Footer from "../footer/footer";
import OnTop from "../onTop/onTop";
const Layout = styled.div`
  width: 100%;
  padding: 0;
  margin: 0;
`;
const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
`;
const Col75 = styled.div`
  width: calc(100% - (100% / 3));
  padding: 0 16px;
  margin: 0;
`;
const Col25 = styled.div`
  width: calc(100% / 3);
  padding: 0 16px;
  margin: 0;
`;
const Row = styled.div`
  width: 100%;
  padding: 0;
  margin: 0;
`;
const ImageItem = styled.img`
  width: 100%;
  object-fit: cover;
  background-color: #fafafa;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
`;
const Description = styled.p`
  font-size: 16px;
  line-height: 1.5;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid #eaeaea;
  padding: 24px;
  margin-bottom: 24px;
  align-items: center;
`;
const StyleLink = styled(Link)`
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
const HighLight = styled.span`
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
const Note = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: #525252;
`;
//   const handleAddToCart = (themeName) => {
//     themeApi.addToCart(themeName);
//   };
const BoxItem = styled.p`
  font-size: 14px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-block-end: inherit;
  padding-bottom: 16px;
`;
const Item = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const CustomItem = styled(Item)`
  font-size: 14px;
  color: #525252;
  font-weight: 400;
`;
const CustomBoxItem = styled(BoxItem)`
  margin-bottom: 0;
  padding-bottom: 0;
  border-block-end: 0;
`;
const ThemeItem = (props) => {
  const { description, name, version, price } = props;
  const url = `https://aspirethemes.com/images/themes/${props.match.params.name}/home.webp`;

  const [themeList, setThemeList] = useState([]);
  useEffect(() => {
    const getAllThemes = async () => {
      const data = await themeApi.getAll();
      const itemSelect = data.find(
        (item) => item.name.toLowerCase() === props.match.params.name
      );
      setThemeList(itemSelect);
    };
    getAllThemes();
  }, []);
  console.log(themeList[price]);
  return (
    <>
      <Layout>
        <Container>
          <Col75>
            <ImageItem src={url} />
          </Col75>
          <Col25>
            <Title>{themeList[name]}</Title>
            <Description>{themeList[description]}</Description>
            <Box>
              <StyleLink primary to="!#">
                Buy Now &#9866; ${themeList[price]}
              </StyleLink>
              <StyleLink to="!#">Live Demo &#10138;</StyleLink>
              <HighLight>One-time Purchase</HighLight>
              <HighLight>14-Day 100% Money Back Guarantee</HighLight>
              <Note>If you’re unhappy, get a full refund, no questions!</Note>
            </Box>
            <Box>
              <BoxItem>Ghost websites built with {themeList[name]}</BoxItem>
              <BoxItem>Documentation · Changelog</BoxItem>
              <BoxItem>
                <Item>Current Version</Item>
                <CustomItem>{themeList[version]}</CustomItem>
              </BoxItem>
              <BoxItem>
                <Item>Last Update</Item>
                <CustomItem>NULL</CustomItem>
              </BoxItem>
              <CustomBoxItem>
                <Item>Images Lazy Loading</Item>
                <CustomItem>&#10003;</CustomItem>
              </CustomBoxItem>
            </Box>
          </Col25>
        </Container>
      </Layout>
      <Footer />
      <OnTop />
    </>
  );
};

ThemeItem.propTypes = {
  description: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  version: PropTypes.string,
};

ThemeItem.defaultProps = {
  name: "name",
  description: "description",
  price: "price",
  version: "version",
};
export default ThemeItem;
