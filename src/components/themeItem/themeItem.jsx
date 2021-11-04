import { PropTypes } from "prop-types";
import { useEffect, useState } from "react";
import themeApi from "./../../api/themeApi";
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

const ThemeItem = (props) => {
  const { description, name, version, price } = props;
  const href = props.match.params.name;
  const url = `https://aspirethemes.com/images/themes/${props.match.params.name}/home.webp`;
  const [themeList, setThemeList] = useState([]);
  const [themeSelect, setThemeSelect] = useState([]);

  useEffect(() => {
    // get theme list
    const getAllThemes = async () => {
      const data = await themeApi.getAll();
      const itemSelect = data.find((item) => item.name.toLowerCase() === href);
      setThemeSelect(itemSelect);
      const more = data
        .filter((item) => item.name.toLowerCase() !== href)
        .slice(0, 4);

      setThemeList(more);
    };

    getAllThemes();
    //scroll to top
    window.scrollTo(0, 0);
  }, [href]);

  return (
    <>
      <Layout>
        <Container>
          <Col75>
            <ImageItem src={url} />
          </Col75>
          <Col25>
            <Title>{themeSelect[name]}</Title>
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
              <BoxItem>Ghost websites built with {themeSelect[name]}</BoxItem>
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
                Responsive design. You’ll get a fully responsive site. The theme
                adjusts to phone, tablet, and desktop screens of any size
                imaginable.
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
      <TestimonialSecond />
      <CardTheme
        themeList={themeList}
        props={props}
        themesTitle="Other Ghost themes you might like"
      />
      <Footer />
      <OnTop />
    </>
  );
};

ThemeItem.propTypes = {
  description: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
  version: PropTypes.string,
};

ThemeItem.defaultProps = {
  name: "name",
  description: "description",
  price: "price",
  version: "version",
};
export default ThemeItem;
