import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import CartItem from "./components/CartItem/CartItem";
import { asyncProductForUser, checkOutPurchase } from "./cartSlice";

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
} from "./Cart.styles";
import "./style.css";
import ValidateToken from "api/auth";
import ToastConfig from "features/common/toast/toast";

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

  const handleCheckOut = () => {
    // handle check out
    const item = { userId: user, products, total };
    if (isUser) {
      dispatch(checkOutPurchase(item));
      ToastConfig.toastSuccess("Check out successful");
    } else {
      ToastConfig.toastInfo("Please login to check out.", "colored", 4000);
    }
  };

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
                  <CustomBtn onClick={handleCheckOut}>Checkout</CustomBtn>
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
