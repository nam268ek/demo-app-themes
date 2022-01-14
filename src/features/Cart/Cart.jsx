import React, { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useNavigate } from "react-router-dom";
import CartItem from "./components/CartItem/CartItem";
import {
  asyncProductForUser,
  checkOutPurchase,
  paymentRequest,
} from "./cartSlice";

import {
  Container,
  Layout,
  ContentCart,
  ContentCheckOut,
  Title,
  CustomBtn,
  CustomDiv,
  CustomTitle,
  Hr,
  Price,
  TitlePrice,
  DivImage,
  CustomImage,
  Loader,
  Span,
} from "./Cart.styles";
import "./style.css";
import ValidateToken from "api/auth";
import ToastConfig from "features/common/toast/toast";
import { loadStripe } from "@stripe/stripe-js";
import { toast } from "react-toastify";

function Cart() {
  const themeList = useSelector((state) => state.carts.products);
  const { user } = useSelector((state) => state.login);
  //user is logged in
  const [isUser, setIsUser] = React.useState(false);
  const {
    products,
    total,
    qty: qtyValue,
  } = useSelector((state) => state.carts);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const nodeRef = React.useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    //check token is valid and not expired
    const handleCheckToken = async () => {
      const token = await ValidateToken.getToken("token");
      const tokenExpire =
        token && (await ValidateToken.checkExpireToken(token));
      //note: if tokenExpire is false & token is valid => token is not expire
      if (token && !tokenExpire) {
        setIsUser(true);
      }
    };
    handleCheckToken();
  }, [dispatch]);

  useEffect(() => {
    // handle async item cart for user in database
    const handleAsyncProductToUser = async () => {
      const asyncProducts = {
        userId: user,
        products,
        total,
      };
      await dispatch(asyncProductForUser(asyncProducts));
    };
    isUser && handleAsyncProductToUser();
  }, [isUser, products, total, dispatch, user]);

  const handleNavigate = () => {
    navigate("/themes", { replace: true });
  };

  const handleCheckOut = async () => {
    if (isUser) {
      setIsLoading(true);
      const stripe = await loadStripe(
        process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
      );
      const item = { userId: user, products, total };
      const { payload } = await dispatch(paymentRequest(item));
      // redirect to checkout stripe
      stripe.redirectToCheckout({ sessionId: payload.data.id });
    } else {
      ToastConfig.toastInfo("Please login to check out.", "colored", 4000);
    }
  };
  //-------------------
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      toast.configure();
      toast.success("Payment success.", {
        position: toast.POSITION.TOP_CENTER,
        theme: "colored",
        autoClose: 5000,
        style: { width: "100%", fontSize: "16px", fontWeight: "bold" },
      });
    }

    if (query.get("canceled")) {
      toast.configure();
      toast.error("Payment canceled.", {
        position: toast.POSITION.TOP_CENTER,
        theme: "colored",
        autoClose: 5000,
        style: { width: "100%", fontSize: "16px", fontWeight: "bold" },
      });
    }
  }, []);

  //--------------------
  return (
    <>
      <Layout>
        {qtyValue <= 0 ? (
          <Container>
            <CustomDiv
              flexDirection="column"
              padding="0 30px"
              alignItems="center"
            >
              <DivImage>
                <CustomImage
                  src="https://res.cloudinary.com/ds6y4vgjb/image/upload/v1637585017/undraw_empty_cart_co35_pvhcna.svg"
                  height="295px"
                  width="265px"
                />
              </DivImage>
              <CustomTitle
                padding="16px 0"
                margin="0 0 16px 0"
                textAlign="center"
              >
                Cart is empty
              </CustomTitle>
              <CustomBtn width="unset" onClick={() => handleNavigate()}>
                Choose theme
              </CustomBtn>
            </CustomDiv>
          </Container>
        ) : (
          <Container flex>
            <ContentCart>
              <CustomDiv padding="0 30px">
                <Title>Cart</Title>
              </CustomDiv>
              <TransitionGroup>
                {themeList?.map((item, index) => (
                  <CSSTransition
                    key={index}
                    nodeRef={nodeRef}
                    classNames="fade"
                    timeout={500}
                    unmountOnExit
                  >
                    <CartItem item={item} />
                  </CSSTransition>
                ))}
              </TransitionGroup>
            </ContentCart>
            <ContentCheckOut>
              <CustomDiv padding="0 30px">
                <Title>Summary</Title>
              </CustomDiv>
              <div>
                <CustomDiv
                  justifyContent="space-between"
                  alignItems="baseline"
                  padding="0 30px"
                  margin="0 0 16px 0"
                >
                  <CustomTitle padding="0 16px">Total</CustomTitle>
                  <Price>
                    <TitlePrice>${total}</TitlePrice>
                  </Price>
                </CustomDiv>
                <Hr />
                <CustomDiv
                  flexDirection="column"
                  justifyContent="space-between"
                  alignItems="center"
                  padding="0 46px"
                >
                  <CustomBtn
                    onClick={handleCheckOut}
                    primary="true"
                    // loading={isLoading}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader /> <Span>processing...</Span>
                      </>
                    ) : (
                      `Process to checkout`
                    )}
                  </CustomBtn>
                </CustomDiv>
              </div>
            </ContentCheckOut>
          </Container>
        )}
      </Layout>
    </>
  );
}

export default Cart;
