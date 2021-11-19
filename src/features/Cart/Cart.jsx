import Footer from "components/footer/footer";
import OnTop from "components/onTop/onTop";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
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
} from "./Cart.styles";

import { useState, useEffect } from "react";
import CartItem from "./components/CartItem/CartItem";

Cart.propTypes = {};

function Cart(props) {
  const dispatch = useDispatch();
  const themeList = useSelector((state) => state.carts.products);
  // const cart = useSelector((state) => state.products.find(item=> ));
  console.log("cart:", themeList);
  return (
    <>
      <Layout>
        <Container>
          <Col w={2 / 3}>
            <CustomDiv padding="0 30px">
              <Title>Cart</Title>
            </CustomDiv>
            <CartItem themeList={themeList} />
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
                  <TitlePrice>$1000,00</TitlePrice>
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
      </Layout>
      <Footer />
      <OnTop />
    </>
  );
}

export default Cart;
