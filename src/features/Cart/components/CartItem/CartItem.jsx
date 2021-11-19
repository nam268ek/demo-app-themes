import React from "react";
import PropTypes from "prop-types";
import {
  AboutTheme,
  Button,
  CartInfo,
  CustomDiv,
  Desc,
  Hr,
  Label,
  NameTheme,
  Preview,
  PreviewImg,
  Price,
  Qty,
  Remove,
  ThemeLink,
  TitlePrice,
  Item,
} from "features/Cart/Cart.styles";
import {
  inCreaseQty,
  deCreaseQty,
  removeFormCart,
} from "features/Cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

CartItem.propTypes = {};

function CartItem({ themeList }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.carts.products);
  const handleValue = ({ id }) => {
    const item = cart.find((item) => item.id === id);
    return item.qty;
  };
  console.log("themeList", themeList);
  return (
    <>
      {themeList &&
        themeList.map((item) => (
          <>
            <Item>
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
                    <Button btlr onClick={() => dispatch(inCreaseQty(item))}>
                      +
                    </Button>
                    <Qty
                      type="text"
                      id={item.id}
                      name={item.name}
                      // onChange={handleInputValue}
                      value={handleValue(item)}
                    />
                    <Button btrr onClick={() => dispatch(deCreaseQty(item))}>
                      -
                    </Button>
                    <Remove
                      type="submit"
                      onClick={() => dispatch(removeFormCart(item))}
                    >
                      Remove
                    </Remove>
                  </CustomDiv>
                </Desc>
                <Price>
                  <TitlePrice>${item.price}</TitlePrice>
                </Price>
              </CartInfo>
            </Item>
            <Hr margin="0 30px 32px 30px" />
          </>
        ))}
    </>
  );
}

export default CartItem;
