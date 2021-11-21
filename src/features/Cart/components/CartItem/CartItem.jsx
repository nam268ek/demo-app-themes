import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
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
  deCreaseQty,
  removeFormCart,
  addToCart,
  getTotal,
  updateItem,
} from "features/Cart/cartSlice";

function CartItem({ item }) {
  const { name, price, image, id, qty, description } = item;
  const [valueQty, setValueQty] = useState(qty);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotal());
  }, [dispatch]);

  const handleOnChangeQty = (e) => {
    setValueQty(e.target.value);
  };

  const handleOnBlurQty = (e, item) => {
    const value = Math.max(
      Number(1),
      Math.min(Number(10), Number(e.target.value))
    );

    toast.configure();
    Number(e.target.value) > 10
      ? toast.warn(`Maximum quantity is 10`)
      : Number(e.target.value) < 1 && toast.warn(`Minimum quantity is 1`);

    const update = {
      ...item,
      qty: value,
    };

    setValueQty(value);
    dispatch(updateItem(update));
    dispatch(getTotal());
  };

  const handleAddToCart = (item) => {
    setValueQty(valueQty + 1);
    dispatch(addToCart(item));
    dispatch(getTotal());
  };

  const handleRemoveQty = (item) => {
    setValueQty(valueQty - 1);
    dispatch(deCreaseQty(item));
    dispatch(getTotal());
  };

  const handleRemoveItem = (item) => {
    dispatch(removeFormCart(item));
    dispatch(getTotal());
  };

  return (
    <>
      <Item>
        <ThemeLink to={`/themes/${name.toLowerCase()}`}>
          <Preview>
            <PreviewImg src={image} alt={name} width="159px" height="145px" />
          </Preview>
        </ThemeLink>
        <CartInfo>
          <Desc>
            <NameTheme>{name}</NameTheme>
            <AboutTheme>{description}</AboutTheme>
            <CustomDiv>
              <Label>Quantity</Label>
              <Button btlr onClick={() => handleAddToCart(item)}>
                +
              </Button>
              <Qty
                type="number"
                id={id}
                name={name}
                onChange={handleOnChangeQty}
                onBlur={(e) => handleOnBlurQty(e, item)}
                value={valueQty}
              />
              <Button btrr onClick={() => handleRemoveQty(item)}>
                -
              </Button>
              <Remove type="submit" onClick={() => handleRemoveItem(item)}>
                Remove
              </Remove>
            </CustomDiv>
          </Desc>
          <Price>
            <TitlePrice>${price}</TitlePrice>
          </Price>
        </CartInfo>
      </Item>
      <Hr margin="0 30px 32px 30px" />
    </>
  );
}

export default CartItem;
