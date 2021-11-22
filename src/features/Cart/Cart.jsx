import React from "react";
import { useSelector } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useNavigate } from "react-router-dom";

import Footer from "components/footer/footer";
import OnTop from "components/onTop/onTop";
import CartItem from "./components/CartItem/CartItem";

import {
  Container,
  Layout,
  Col,
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

function Cart(props) {
  const themeList = useSelector((state) => state.carts.products);
  const total = useSelector((state) => state.carts.total);
  const qtyValue = useSelector((state) => state.carts.qty);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/themes", { replace: true });
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
                  width="443px"
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
            <Col w={2 / 3}>
              <CustomDiv padding="0 30px">
                <Title>Cart</Title>
              </CustomDiv>
              <TransitionGroup>
                {themeList &&
                  themeList.map((item) => (
                    <CSSTransition
                      key={item.id}
                      classNames="fade"
                      timeout={500}
                      unmountOnExit
                    >
                      <CartItem item={item} />
                    </CSSTransition>
                  ))}
              </TransitionGroup>
            </Col>
            <Col w={1 / 3}>
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
                <Hr margin="0 30px 32px 30px" />
                <CustomDiv
                  flexDirection="column"
                  justifyContent="space-between"
                  alignItems="center"
                  padding="0 46px"
                >
                  <CustomBtn>Checkout</CustomBtn>
                </CustomDiv>
              </div>
            </Col>
          </Container>
        )}
      </Layout>
      <Footer />
      <OnTop />
    </>
  );
}

export default Cart;
