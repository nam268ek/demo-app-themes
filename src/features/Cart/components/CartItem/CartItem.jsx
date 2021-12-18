import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  asyncProductForUser,
} from "features/Cart/cartSlice";

function CartItem({ item }) {
  const { name, price, image, id, qty, description } = item;
  const [valueQty, setValueQty] = useState(qty);
  const dispatch = useDispatch();

  const { user, token } = useSelector((state) => state.login);
  const { products, total } = useSelector((state) => state.carts);

  useEffect(() => {
    dispatch(getTotal());

    // handle async item cart for user
    const handleAsyncProductToUser = async () => {
      const asyncProducts = {
        userId: user,
        products,
        total,
      };
      await dispatch(asyncProductForUser(asyncProducts));
    };
    token && handleAsyncProductToUser();

  }, [dispatch, token, user, products, total]);

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
      ? toast.warn(`Maximum quantity is 10`, { theme: "colored" })
      : Number(e.target.value) < 1 &&
        toast.warn(`Minimum quantity is 1`, { theme: "colored" });

    const update = {
      ...item,
      qty: value,
    };

    setValueQty(value);
    dispatch(updateItem(update));
    dispatch(getTotal());
  };

  const handleAddToCart = (item) => {
    if (valueQty < 10) {
      setValueQty(valueQty + 1);
      dispatch(addToCart(item));
      dispatch(getTotal());
    }
  };

  const handleRemoveQty = (item) => {
    if (valueQty > 1) {
      setValueQty(valueQty - 1);
      dispatch(deCreaseQty(item));
      dispatch(getTotal());
    }
  };

  const handleRemoveItem = (item) => {
    dispatch(removeFormCart(item));
    dispatch(getTotal());
  };

  return (
    <div>
      <Item>
        <ThemeLink to={`/themes/${name.toLowerCase()}`}>
          <Preview>
            <PreviewImg src={image} alt={name} width="159px" height="145px" />
          </Preview>
        </ThemeLink>
        <CartInfo>
          <Desc>
            <NameTheme>
              {name}
              <TitlePrice>${price}</TitlePrice>
            </NameTheme>
            <AboutTheme>{description}</AboutTheme>
            <CustomDiv qty="true">
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
        </CartInfo>
      </Item>
      <Hr margin="0 30px 32px 30px" />
    </div>
  );
}

export default CartItem;
