import { PropTypes } from "prop-types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getAllTheme } from "features/Theme/themeSlice";
import { addToCart } from "features/Cart/cartSlice";
import { toast } from "react-toastify";
import FeedBackSecond from "components/FeedBack/FeedBackSecond";
import { Container } from "globalStyles";
import {
  Box,
  BoxItem,
  Col25,
  Col75,
  LayoutItem,
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
import CardTheme from "components/CardTheme/CardTheme";

const ThemeItem = (props) => {
  const { description, version, price, nameProperty } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const MAX_QTY = 10;
  const { themeItem: nameTheme } = useParams();

  const themeList = useSelector((state) => state.themes.themeList);
  const products = useSelector((state) => state.carts.products);

  const themeSelect = themeList.find(
    (item) => item.name.toLowerCase() === nameTheme
  );

  const moreTheme = themeList
    .filter((item) => item.name.toLowerCase() !== nameTheme)
    .slice(0, 4);

  window.scrollTo(0, 0);

  useEffect(() => {
    const handleValue = async () => {
      const { payload: data } = await dispatch(getAllTheme());
      const isExist = data.find(
        (item) => item.name.toLowerCase() === nameTheme
      );
      !isExist && navigate(`/not-found`, { replace: true });
    };
    handleValue();
  }, [dispatch, nameTheme, navigate]);

  const handleAddToCart = (e, item) => {
    e.preventDefault();
    const itemSelect = products.find((product) => product.id === item.id);
    const isItemExist = itemSelect ? itemSelect : false;

    if (isItemExist.qty < MAX_QTY || !isItemExist) {
      //dispath action add to cart
      const product = { ...item, qty: 1 };
      const action = addToCart(product);
      dispatch(action);
      //show toast message
      toast.configure({ theme: "colored", autoClose: 3000 });
      toast.success("Successfully", { theme: "colored", autoClose: 3000 });
    } else {
      //show toast message
      toast.configure();
      toast.warn(`Maximum quantity is ${MAX_QTY}`, { theme: "colored" });
    }
  };

  const handleNavigateToCart = (e, item) => {
    e.preventDefault();
    const itemSelect = products.find((product) => product.id === item.id);
    const isItemExist = itemSelect ? itemSelect : false;

    if (isItemExist.qty < MAX_QTY || !isItemExist) {
      //dispath action add to cart
      const product = { ...item, qty: 1 };
      const action = addToCart(product);
      dispatch(action);
      navigate("/cart"); // navigate to cart
    } else {
      //show toast message
      toast.configure();
      toast.warn(`Maximum quantity is ${MAX_QTY}`, { theme: "colored" });
    }
  };

  //url image default icon
  const urlImage =
    "https://res.cloudinary.com/ds6y4vgjb/image/upload/v1636026141/check_wtwl39.png";

  return (
    <>
      {themeSelect && (
        <Layout>
          <Container>
            <LayoutItem>
              <Col75>
                <ImageItem
                  src={`https://aspirethemes.com/images/themes/${nameTheme}/home.webp`}
                />
              </Col75>
              <Col25>
                <Title>{themeSelect[nameProperty]}</Title>
                <Description>{themeSelect[description]}</Description>
                <Box>
                  <StyleLink
                    primary="true"
                    to=""
                    onClick={(e) => handleNavigateToCart(e, themeSelect)}
                  >
                    Buy Now &#9866; ${themeSelect[price]}
                  </StyleLink>
                  <StyleLink
                    to=""
                    onClick={(e) => handleAddToCart(e, themeSelect)}
                  >
                    Add to cart &#10138;
                  </StyleLink>
                  <HighLight>One-time Purchase</HighLight>
                  <HighLight>14-Day 100% Money Back Guarantee</HighLight>
                  <Note>
                    If you’re unhappy, get a full refund, no questions!
                  </Note>
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
            </LayoutItem>
          </Container>
          <Container>
            <LayoutItem>
              <Content>
                <Box className="secondary">
                  <DivImage>
                    <CustomImage src={urlImage} />
                  </DivImage>
                  <TagP>
                    Ghost 4.0+. Enjoy a beautiful, functional site in no time.
                    The theme supports the Ghost editor cards and delivers a
                    stunning design.
                  </TagP>
                </Box>
              </Content>
              <Content>
                <Box className="secondary">
                  <DivImage>
                    <CustomImage src={urlImage} />
                  </DivImage>
                  <TagP>
                    Membership support. Add membership and subscription to your
                    website for ultimate monetization. The theme comes with
                    Ghost Membership and Subscription features.
                  </TagP>
                </Box>
              </Content>
              <Content>
                <Box className="secondary">
                  <DivImage>
                    <CustomImage src={urlImage} />
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
                    <CustomImage src={urlImage} />
                  </DivImage>
                  <TagP>
                    Free updates. New Ghost features are added to your theme as
                    updates. These improvements come to you at no extra cost.
                    Zero stress and worry about lagging behind others.
                  </TagP>
                </Box>
              </Content>
              <Content>
                <Box className="secondary">
                  <DivImage>
                    <CustomImage src={urlImage} />
                  </DivImage>
                  <TagP>
                    Free support. Whenever you have any questions or face sudden
                    issues with your theme, please reach out on the contact
                    page.
                  </TagP>
                </Box>
              </Content>
              <Content>
                <Box className="secondary">
                  <DivImage>
                    <CustomImage src={urlImage} />
                  </DivImage>
                  <TagP>
                    Translation ready. The theme supports German, Spanish,
                    French, Portuguese, Italian, Finnish, Dutch, Turkish, and
                    Danish.
                  </TagP>
                </Box>
              </Content>
            </LayoutItem>
          </Container>
        </Layout>
      )}
      <FeedBackSecond />
      <CardTheme
        themeList={moreTheme}
        themesTitle="Other Ghost themes you might like"
      />
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
