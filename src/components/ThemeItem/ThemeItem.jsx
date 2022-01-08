import { PropTypes } from "prop-types";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getAllTheme } from "features/Theme/themeSlice";
import { addToCart, asyncProductForUser } from "features/Cart/cartSlice";
import { toast } from "react-toastify";
import FeedBackSecond from "components/FeedBack/FeedBackSecond";
import { Container } from "globalStyles";
import jwt_decode from "jwt-decode";

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
} from "./ThemeItem.styles";
import CardTheme from "components/CardTheme/CardTheme";
import { logOut } from "features/Login/loginSlice";

const ThemeItem = ({ description, version, price, nameProperty }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [expToken, setExpToken] = useState(false);
  const [loading, setLoading] = useState({
    loadingNavigate: false,
    loadingAddToCart: false,
  });

  const MAX_QTY = 10;
  const { themeItem: nameTheme } = useParams();

  const themeList = useSelector((state) => state.themes.themeList);
  const { user, token } = useSelector((state) => state.login);
  const { products, total } = useSelector((state) => state.carts);

  const themeSelect = themeList.find(
    (item) => item.name.toLowerCase() === nameTheme
  );

  const moreTheme = themeList
    .filter((item) => item.name.toLowerCase() !== nameTheme)
    .slice(0, 4);

  window.scrollTo(0, 0);

  useEffect(() => {
    const abortController = new AbortController();
    //reload page get all theme
    const handleValue = async () => {
      const { payload: data } = await dispatch(getAllTheme());
      const isExist = data.find(
        (item) => item.name.toLowerCase() === nameTheme
      );
      !isExist && navigate(`/not-found`, { replace: true });
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
    expToken && handleAsyncProductToUser();
    //clean up
    return () => abortController.abort();
  }, [dispatch, nameTheme, navigate, user, products, total, expToken]);

  //===================================================
  const checkExpireToken = (token) => {
    const expire = jwt_decode(token).exp;
    //check token expire
    if (Date.now() >= expire * 1000) {
      dispatch(logOut());
      setTimeout(() => {
        toast.info("Session has expired.", {
          position: toast.POSITION.TOP_CENTER,
          theme: "colored",
          autoClose: 3000,
        });
        navigate("/login", { replace: true });
      }, 1500);
    } else setExpToken(true); //token is not expire
  };

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
      const action = addToCart(productItem);
      dispatch(action);

      token && checkExpireToken(token); //check token expire

      toast.configure({ theme: "colored", autoClose: 3000 });
      toast.success("Successfully", {
        position: toast.POSITION.TOP_CENTER,
        theme: "colored",
        autoClose: 3000,
      });

      setTimeout(
        () => setLoading({ ...loading, loadingAddToCart: false }),
        800
      );
    } else {
      //show toast message
      toast.configure();
      toast.warn(`Maximum quantity is ${MAX_QTY}`, {
        theme: "colored",
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  //===================================================
  const handleNavigateToCart = (e, item) => {
    e.preventDefault();
    const itemSelect = products.find((product) => product._id === item._id);
    const isItemExist = itemSelect ? itemSelect : false;

    if (isItemExist.qty < MAX_QTY || !isItemExist) {
      setLoading({ ...loading, loadingNavigate: true });
      //dispath action add to cart
      const product = { ...item, qty: 1 };
      const action = addToCart(product);
      dispatch(action);

      // navigate to cart
      setTimeout(() => {
        navigate("/cart");
        setLoading({ ...loading, loadingNavigate: false });
      }, 800);
    } else {
      //show toast message
      toast.configure();
      toast.warn(`Maximum quantity is ${MAX_QTY}`, {
        theme: "colored",
        position: toast.POSITION.TOP_CENTER,
      });
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
