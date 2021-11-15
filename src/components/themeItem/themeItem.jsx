import { PropTypes } from "prop-types";
import { useEffect } from "react";
import Footer from "../footer/footer";
import OnTop from "../onTop/onTop";
import TestimonialSecond from "../testimonialSecond/testimonialSecond";
import CardTheme from "../cardTheme/cardTheme";
import {
  Box,
  BoxItem,
  Col25,
  Col75,
  Container,
  Content,
  CustomBoxItem,
  CustomImage,
  CustomItem,
  Description,
  DivImage,
  HighLight,
  ImageItem,
  Item,
  Layout,
  Note,
  StyleLink,
  TagP,
  Title,
} from "./ThemeItem.styles";
import { useDispatch, useSelector } from "react-redux";
import { getAllTheme } from "features/Theme/themeSlice";

const ThemeItem = (props) => {
  const dispatch = useDispatch();
  const { nameTheme } = props.match.params;
  const { description, version, price, nameProperty, href } = props;

  const themeList = useSelector((state) => state.themes.themeList);
  const themeSelect = themeList.find(
    (item) => item.name.toLowerCase() === nameTheme
  );
  const moreTheme = themeList
    .filter((item) => item.name.toLowerCase() !== nameTheme)
    .slice(0, 4);

  window.scrollTo(0, 0);

  useEffect(() => {
    dispatch(getAllTheme());
  }, [dispatch]);

  return (
    <>
      {themeSelect && (
        <Layout>
          <Container>
            <Col75>
              <ImageItem
                src={`https://aspirethemes.com/images/themes/${nameTheme}/home.webp`}
              />
            </Col75>
            <Col25>
              <Title>{themeSelect[nameProperty]}</Title>
              <Description>{themeSelect[description]}</Description>
              <Box>
                <StyleLink primary="true" to="!#">
                  Buy Now &#9866; ${themeSelect[price]}
                </StyleLink>
                <StyleLink to="!#">Live Demo &#10138;</StyleLink>
                <HighLight>One-time Purchase</HighLight>
                <HighLight>14-Day 100% Money Back Guarantee</HighLight>
                <Note>If you’re unhappy, get a full refund, no questions!</Note>
              </Box>
              <Box>
                <BoxItem>
                  Ghost websites built with {themeSelect[nameProperty]}
                </BoxItem>
                <BoxItem>Documentation · Changelog</BoxItem>
                <BoxItem>
                  <Item>Current Version</Item>
                  <CustomItem>{themeSelect[version]}</CustomItem>
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
          <Container>
            <Content>
              <Box className="secondary">
                <DivImage>
                  <CustomImage src="https://res.cloudinary.com/ds6y4vgjb/image/upload/v1636026141/check_wtwl39.png" />
                </DivImage>
                <TagP>
                  Ghost 4.0+. Enjoy a beautiful, functional site in no time. The
                  theme supports the Ghost editor cards and delivers a stunning
                  design.
                </TagP>
              </Box>
            </Content>
            <Content>
              <Box className="secondary">
                <DivImage>
                  <CustomImage src="https://res.cloudinary.com/ds6y4vgjb/image/upload/v1636026141/check_wtwl39.png" />
                </DivImage>
                <TagP>
                  Membership support. Add membership and subscription to your
                  website for ultimate monetization. The theme comes with Ghost
                  Membership and Subscription features.
                </TagP>
              </Box>
            </Content>
            <Content>
              <Box className="secondary">
                <DivImage>
                  <CustomImage src="https://res.cloudinary.com/ds6y4vgjb/image/upload/v1636026141/check_wtwl39.png" />
                </DivImage>
                <TagP>
                  Responsive design. You’ll get a fully responsive site. The
                  theme adjusts to phone, tablet, and desktop screens of any
                  size imaginable.
                </TagP>
              </Box>
            </Content>
            <Content>
              <Box className="secondary">
                <DivImage>
                  <CustomImage src="https://res.cloudinary.com/ds6y4vgjb/image/upload/v1636026141/check_wtwl39.png" />
                </DivImage>
                <TagP>
                  Free updates. New Ghost features are added to your theme as
                  updates. These improvements come to you at no extra cost. Zero
                  stress and worry about lagging behind others.
                </TagP>
              </Box>
            </Content>
            <Content>
              <Box className="secondary">
                <DivImage>
                  <CustomImage src="https://res.cloudinary.com/ds6y4vgjb/image/upload/v1636026141/check_wtwl39.png" />
                </DivImage>
                <TagP>
                  Free support. Whenever you have any questions or face sudden
                  issues with your theme, please reach out on the contact page.
                </TagP>
              </Box>
            </Content>
            <Content>
              <Box className="secondary">
                <DivImage>
                  <CustomImage src="https://res.cloudinary.com/ds6y4vgjb/image/upload/v1636026141/check_wtwl39.png" />
                </DivImage>
                <TagP>
                  Translation ready. The theme supports German, Spanish, French,
                  Portuguese, Italian, Finnish, Dutch, Turkish, and Danish.
                </TagP>
              </Box>
            </Content>
          </Container>
        </Layout>
      )}
      <TestimonialSecond />
      <CardTheme
        themeList={moreTheme}
        props={props}
        themesTitle="Other Ghost themes you might like"
        href={href}
      />
      <Footer />
      <OnTop />
    </>
  );
};

ThemeItem.propTypes = {
  description: PropTypes.string,
  nameProperty: PropTypes.string,
  price: PropTypes.string,
  version: PropTypes.string,
};

ThemeItem.defaultProps = {
  nameProperty: "name",
  description: "description",
  price: "price",
  version: "version",
};
export default ThemeItem;
