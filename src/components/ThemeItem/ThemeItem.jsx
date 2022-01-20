import { PropTypes } from "prop-types";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getAllTheme } from "features/Theme/themeSlice";
import { addToCart, asyncProductForUser } from "features/Cart/cartSlice";
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
  Loader,
  CustomDiv,
} from "./ThemeItem.styles";
import CardTheme from "components/CardTheme/CardTheme";
import ToastConfig from "features/common/toast/toast";

const ThemeItem = ({
  description,
  version,
  price,
  nameProperty,
  defaultImage,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { statusUser } = useSelector((state) => state.login);
  const [loading, setLoading] = useState({
    loadingNavigate: false,
    loadingAddToCart: false,
  });

  const MAX_QTY = 10;
  const { themeItem: nameTheme } = useParams();

  const themeList = useSelector((state) => state.themes.themeList);
  const { user } = useSelector((state) => state.login);
  const { products, total } = useSelector((state) => state.carts);

  const themeSelect = themeList.find(
    (item) => item.name.toLowerCase() === nameTheme
  );

  const moreTheme = themeList
    .filter((item) => item.name.toLowerCase() !== nameTheme)
    .slice(0, 4);

  window.scrollTo(0, 0);
  console.log(themeSelect);

  useEffect(() => {
    let isSubscribe = true;
    //reload page get all theme
    const handleValue = async () => {
      const { payload: data } = await dispatch(getAllTheme());
      if (isSubscribe && data) {
        const isExist = data.find(
          (item) => item.name.toLowerCase() === nameTheme
        );
        !isExist && navigate(`/not-found`, { replace: true });
      }
    };
    // handle async item cart for user in database
    const handleAsyncProductToUser = async () => {
      const asyncProducts = {
        userId: user,
        products,
        total,
      };
      await dispatch(asyncProductForUser(asyncProducts));
    };

    handleValue(); //get all theme
    // if token exist & token id not expire => sync item cart to database
    statusUser && handleAsyncProductToUser();
    // clean up
    return () => isSubscribe === false;
  }, [dispatch, nameTheme, navigate, user, products, total, statusUser]);

  //===================================================
  const handleAddToCart = (e, item) => {
    e.preventDefault();
    const itemSelect = products.find((product) => product._id === item._id);
    const isItemExist = itemSelect ? itemSelect : false;
    if (isItemExist.qty < MAX_QTY || !isItemExist) {
      //set Loading...
      setLoading({ ...loading, loadingAddToCart: true });
      //dispath action add to cart
      const productItem = { ...item, qty: 1 };
      dispatch(addToCart(productItem));
      //toast success
      ToastConfig.toastSuccess("Successfully");
      setTimeout(
        () => setLoading({ ...loading, loadingAddToCart: false }),
        800
      );
    } else {
      //toast waring max qty is MAX_QTY
      ToastConfig.toastWarning(`Maximum quantity is ${MAX_QTY}`);
    }
  };

  //===================================================
  const handleNavigateToCart = (e, item) => {
    e.preventDefault();
    handleAddToCart(e, item); // +1 qty
    // navigate to cart
    setTimeout(() => {
      navigate("/cart", { replace: true });
      setLoading({ ...loading, loadingNavigate: false });
    }, 800);
  };

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
                    disabled={loading.loadingNavigate}
                  >
                    {loading.loadingNavigate ? (
                      <>
                        <Loader /> Loading...
                      </>
                    ) : (
                      `Buy Now – $${themeSelect[price]}`
                    )}
                  </StyleLink>
                  <StyleLink
                    to=""
                    onClick={(e) => handleAddToCart(e, themeSelect)}
                    disabled={loading.loadingAddToCart}
                  >
                    {loading.loadingAddToCart ? (
                      <>
                        <Loader /> Loading...
                      </>
                    ) : (
                      `Add to cart ➚`
                    )}
                  </StyleLink>
                  <HighLight>One-time Purchase</HighLight>
                  <HighLight>14-Day 100% Money Back Guarantee</HighLight>
                  <Note>
                    If you're unhappy, get a full refund, no questions!
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
                    <CustomImage src={defaultImage} />
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
                    <CustomImage src={defaultImage} />
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
                    <CustomImage src={defaultImage} />
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
                    <CustomImage src={defaultImage} />
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
                    <CustomImage src={defaultImage} />
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
                    <CustomImage src={defaultImage} />
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
      <CustomDiv>
        <CardTheme
          themeList={moreTheme}
          themesTitle="Other Ghost themes you might like"
        />
      </CustomDiv>
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
  defaultImage:
    "https://res.cloudinary.com/ds6y4vgjb/image/upload/v1636026141/check_wtwl39.png",
};
export default ThemeItem;
