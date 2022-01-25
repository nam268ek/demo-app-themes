import ValidateToken from 'api/auth';
import { Container } from 'globalStyles';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { BsCheck } from 'react-icons/bs';
import Moment from 'react-moment';
import NumberFormat from 'react-number-format';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  BoxInfoOrders,
  DivImage,
  Icon,
  Image,
  Layout,
  ListLink,
  ListLinkInfo,
  ManagerAccount,
  MyOrders,
  NameAccount,
  SecondTitle,
  Span,
  TableOrders,
  TBody,
  TdOrder,
  Thead,
  ThOrder,
  TitleName,
  TrOrder,
  Verify,
  VerifyStatus,
} from 'features/User/User.styles';
import { getDataPurchase } from 'features/User/userSlice';

OrderComplete.propTypes = {
  user: PropTypes.object,
  checkout: PropTypes.object,
  listItems: PropTypes.array,
};

OrderComplete.defaultProps = {
  info: {},
  checkout: {},
  listItems: [],
  lastName: '',
  firstName: '',
  email: '',
  imageDefault:
    'https://res.cloudinary.com/ds6y4vgjb/image/upload/v1638839543/icons8-user-64_igxpij.png',
};

function OrderComplete() {
  const { user: info, checkout } = useSelector((state) => state.users);
  const { statusUser } = useSelector((state) => state.login);
  const [listItem, setListItem] = useState();
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    //user is login => get data purchase
    const handleGetDataPurchase = async () => {
      const tokenExpire = await ValidateToken.checkExpireToken();
      tokenExpire === false ? dispatch(getDataPurchase()) : navigate('/login', { replace: true });
    };
    handleGetDataPurchase();
  }, [navigate, dispatch, statusUser]);

  useEffect(() => {
    //handle detail render
    const handleOrderDetail = () => {
      // const { data } = checkout;
      var orderList = [];
      if (checkout && checkout.length > 0) {
        for (const item of checkout) {
          for (const prod of item.products) {
            orderList.push({
              _id: item._id,
              dateAt: item.createdAt,
              themeName: prod.name,
              total: prod.price * prod.qty,
              urlHref: prod.image,
            });
          }
        }
      }
      return setListItem(orderList);
    };
    handleOrderDetail();
  }, [checkout]);

  const handleClickOpenMobile = () => {
    setIsMobile(!isMobile);
  };

  return (
    <Container>
      <Layout>
        <ListLink open={isMobile}>
          <NameAccount>
            <TitleName hello>Hello, {info && info.lastName + info.firstName}</TitleName>
            <Verify>
              <VerifyStatus>
                <BsCheck size={16} />
                Verified Account
              </VerifyStatus>
            </Verify>
          </NameAccount>
          <ManagerAccount>
            <TitleName link_1>Manage My Account</TitleName>
            <SecondTitle to="/user">My profile</SecondTitle>
          </ManagerAccount>
          <MyOrders>
            <TitleName link_1>My Orders</TitleName>
            <SecondTitle to="/user/order/complete">
              My Completed <Span coming="true">Coming soon</Span>
            </SecondTitle>
            <SecondTitle to="/user/order/cancel">
              My Cancellations <Span coming="true">Coming soon</Span>
            </SecondTitle>
          </MyOrders>
        </ListLink>
        <ListLinkInfo>
          <TitleName link open={isMobile}>
            <Icon onClick={handleClickOpenMobile}>&#9776;</Icon>
            <Span primary="true">My Completed</Span>
          </TitleName>
          <BoxInfoOrders>
            <TitleName order="true">Recent Orders</TitleName>
            <TableOrders>
              <colgroup>
                <col width="18%" />
                <col width="16%" />
                <col width="20%" />
                <col width="30%" />
                <col width="20%" />
              </colgroup>
              <Thead>
                <TrOrder>
                  <ThOrder>Order #</ThOrder>
                  <ThOrder>Theme</ThOrder>
                  <ThOrder>Placed On</ThOrder>
                  <ThOrder special>Items</ThOrder>
                  <ThOrder>Total</ThOrder>
                </TrOrder>
              </Thead>
              <TBody>
                {listItem?.map((item, index) => (
                  <TrOrder key={index}>
                    <TdOrder>{item._id}</TdOrder>
                    <TdOrder>{item.themeName}</TdOrder>
                    <TdOrder>{<Moment format="DD/MM/YYYY">{item.dateAt}</Moment>}</TdOrder>
                    <TdOrder>
                      <DivImage>
                        <Image detail="true" src={item.urlHref} width="80px" alt="" />
                      </DivImage>
                    </TdOrder>
                    <>
                      {
                        <NumberFormat
                          value={item.total}
                          displayType={'text'}
                          thousandSeparator={true}
                          prefix={'$'}
                          renderText={(value, props) => <TdOrder {...props}>{value}</TdOrder>}
                        />
                      }
                    </>
                  </TrOrder>
                ))}
              </TBody>
            </TableOrders>
          </BoxInfoOrders>
        </ListLinkInfo>
      </Layout>
    </Container>
  );
}

export default OrderComplete;
