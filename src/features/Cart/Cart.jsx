import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

Cart.propTypes = {};

const Layout = styled.div`
  width: 100%;
`;

const Container = styled.div`
  padding: 0 14px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
`;

const Col = styled.div`
  /* display: flex;
  flex-direction: column; */
  width: ${(props) =>
    props.w === 2 / 3
      ? `calc(100% * 2/3)`
      : props.w === 1 / 3
      ? `calc(100%/3)`
      : `100%`};
  /* padding: 0 16px; */
`;
const Title = styled.h1`
  font-size: 22px;
  font-weight: 600;
  line-height: 1.5;
  color: #181818;
  padding: 10px 16px;
  margin: 0;
`;

const CartItem = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 16px;
`;
const Preview = styled.div`
  display: block;
  position: relative;
  /* padding-bottom: 70%; */
  background-color: #fafafa;
  height: 100%;
`;
const PreviewImg = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: contain;
`;
const CartInfo = styled.div`
  display: flex;
  width: calc(100% * 3 / 4);
  margin-bottom: 16px;
  padding: 0 16px;
`;
const Desc = styled.div`
  width: calc(100% * 2 / 3);
  display: flex;
  flex-direction: column;
`;
const Price = styled.div`
  width: calc(100% / 3);
  display: flex;
  justify-content: flex-end;
`;
const NameTheme = styled.h1`
  font-size: 22px;
  font-weight: 600;
  line-height: 1.5;
  margin: 0;
`;
const AboutTheme = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: rgb(117, 117, 117);
  text-overflow: ellipsis;
  height: 70px;
`;
const CustomDiv = styled.div`
  display: flex;
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  align-items: ${(props) => props.alignItems || "flex-start"};
  flex-direction: ${(props) => props.flexDirection || "row"};
  padding: ${(props) => props.padding || "0"};
  margin: ${(props) => props.margin || "0"};
`;
const Qty = styled.input`
  outline: none;
  width: 40px;
  height: 26px;
  text-align: center;
  border: 1px solid #ced4da;
  border-radius: 0;
  border-left: 0;
  border-right: 0;
  &:visited {
    border: 1px solid #ced4da;
  }
  &:active {
    border: 1px solid #ced4da;
  }
`;
const Remove = styled.button`
  padding: 8px 16px;
  background-color: #001fff;
  color: #ffffff;
  font-weight: 600;
  border: 1px solid #001fff;
  border-radius: 2px;
  display: flex;
  align-items: center;
  text-align: center;
  height: 26px;
  font-size: 16px;
  margin-left: 16px;

  &:hover {
    color: white;
    background-color: #04c;
  }

  &:focus {
    outline-offset: 2px !important;
    outline: 2px solid #04c !important;
  }
`;
const Label = styled.label`
  font-size: 16px;
  font-weight: 400;
  color: rgb(117, 117, 117);
  padding-right: 16px;
`;
const Button = styled.button`
  color: #181818;
  font-weight: 600;
  border: 1px solid #ced4da;
  display: flex;
  border-top-left-radius: ${(props) => (props.btlr ? "2px" : "0")};
  border-bottom-left-radius: ${(props) => (props.btlr ? "2px" : "0")};
  border-top-right-radius: ${(props) => (props.btrr ? "2px" : "0")};
  border-bottom-right-radius: ${(props) => (props.btrr ? "2px" : "0")};
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 30px;
  height: 26px;
  &:hover {
    background-color: #001fff;
    color: #ffffff;
    border-top-left-radius: ${(props) => (props.btlr ? "2.1px" : "0")};
    border-bottom-left-radius: ${(props) => (props.btlr ? "2.1px" : "0")};
    border-top-right-radius: ${(props) => (props.btrr ? "2.1px" : "0")};
    border-bottom-right-radius: ${(props) => (props.btrr ? "2.1px" : "0")};
  }
`;
const TitlePrice = styled.h2`
  font-size: 22px;
  font-weight: 600;
  line-height: 1.5;
  color: #181818;
  margin: 0;
  height: fit-content;
`;

const ThemeLink = styled(Link)`
  text-decoration: none;
  display: block;
  position: relative;
  padding: 0 16px;
  width: calc(100% * 1 / 4);
  margin-bottom: 16px;
`;
const Hr = styled.hr`
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
`;
const CustomBtn = styled(Remove)`
  height: 100%;
  width: 100%;
  display: inline-block;
  text-align: center;
  margin: 0;
`;
const CustomBtnSecondary = styled.button`
  background-color: white;
  display: block;
  border: 1px solid #1608d6;
  border-radius: 2px;
  padding: 8px 24px;
  font-size: 14px;
  font-weight: 500;
  color: #001fff;
  width: 100%;
  text-align: center;
  margin-bottom: 16px;

  &:hover {
    background-color: #f5f5f5;
  }

  &:focus {
    outline-offset: 2px;
    outline: 2px solid #1608d6 !important;
  }
`;
const CustomTitle = styled(Title)`
  padding: ${(props) => props.padding || "0"};
`;
function Cart(props) {
  const themeList = [
    {
      id: "2a540bd2-86cc-401d-b52f-70a3dc338dc4",
      name: "Ubud",
      description:
        "A newsletter-integrated and personal Ghost theme. Choose from six homepage styles and customize them with your favorite colors.",
      image: "https://aspirethemes.com/images/themes/krabi/preview.webp",
      price: 149,
      version: "1.0.4",
    },
    {
      id: "2a540bd2-86cc-401d-b52f-70a3dc338dc5",
      name: "Krabi",
      description:
        "A newsletter-integrated and personal Ghost theme. Choose from six homepage styles and customize them with your favorite colors.",
      image: "https://aspirethemes.com/images/themes/krabi/preview.webp",
      price: 149,
      version: "1.1.2",
    },
    {
      id: "2a540bd2-86cc-401d-b52f-70a3dc338dc6",
      name: "Penang",
      description: "Membership and Subscription Ghost Theme",
      image: "https://aspirethemes.com/images/themes/penang/preview.webp",
      price: 149,
      version: "1.2.6",
    },
    {
      id: "2a540bd2-86cc-401d-b52f-70a3dc338dc7",
      name: "Hue",
      description: "Ghost Theme for Podcasting and Blogging 🎙",
      image: "https://aspirethemes.com/images/themes/hue/preview.webp",
      price: 149,
      version: "1.0.9",
    },
  ];

  return (
    <Layout>
      <Container>
        <Col w={2 / 3}>
          <Title>Cart</Title>
          {themeList.map((item) => (
            <>
              <CartItem>
                <ThemeLink to={`/themes/${item.name.toLowerCase()}`}>
                  <Preview>
                    <PreviewImg
                      src={item.image}
                      alt={item.name}
                      width="159px"
                      height="145px"
                    />
                  </Preview>
                </ThemeLink>
                <CartInfo>
                  <Desc>
                    <NameTheme>{item.name}</NameTheme>
                    <AboutTheme>{item.description}</AboutTheme>
                    <CustomDiv>
                      <Label>Quantity</Label>
                      <Button btlr>+</Button>
                      <Qty />
                      <Button btrr>-</Button>
                      <Remove>Remove</Remove>
                    </CustomDiv>
                  </Desc>
                  <Price>
                    <TitlePrice>${item.price}</TitlePrice>
                  </Price>
                </CartInfo>
              </CartItem>
              <Hr margin="0 0 32px 16px" />
            </>
          ))}
        </Col>
        <Col w={1 / 3}>
          <Title>Summary</Title>
          <div>
            <CustomDiv
              justifyContent="space-between"
              alignItems="center"
              padding="0 16px"
              margin="0 0 16px 0"
            >
              <CustomTitle>Total</CustomTitle>
              <Price>
                <TitlePrice>$1000,00</TitlePrice>
              </Price>
            </CustomDiv>
            <Hr margin="0 16px 32px 16px" />
            <CustomDiv
              flexDirection="column"
              justifyContent="space-between"
              alignItems="center"
              padding="0 16px"
            >
              <CustomBtnSecondary>Guest Checkout</CustomBtnSecondary>

              <CustomBtn>Member Checkout</CustomBtn>
            </CustomDiv>
          </div>
        </Col>
      </Container>
    </Layout>
  );
}

export default Cart;
