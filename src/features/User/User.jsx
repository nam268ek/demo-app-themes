import ValidateToken from 'api/auth';
import Chart from 'features/Chart/Chart';
import Profile from 'features/Profile/Profile';
import { Container } from 'globalStyles';
import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { BsCheck } from 'react-icons/bs';
import Modal from 'react-modal';
import Moment from 'react-moment';
import NumberFormat from 'react-number-format';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import './transition.css';
import {
  BoxInfo,
  BoxInfoOrders,
  BoxInfoPersonal,
  CheckboxMail,
  CheckboxMailStatus,
  CheckboxMailText,
  DivChart,
  DivImage,
  Email,
  Icon,
  Image,
  Info,
  Layout,
  ListLink,
  ListLinkInfo,
  ManagerAccount,
  Monney,
  MyOrders,
  Name,
  NameAccount,
  SecondTitle,
  Span,
  StyleLink,
  TableOrders,
  TBody,
  TdOrder,
  Thead,
  ThOrder,
  TitleName,
  Total,
  TrOrder,
  Verify,
  VerifyStatus,
} from './User.styles';
import { getDataPurchase } from './userSlice';

User.propTypes = {
  user: PropTypes.object,
  checkout: PropTypes.object,
  listItems: PropTypes.array,
};

User.defaultProps = {
  info: {},
  checkout: {},
  listItems: [],
  lastName: '',
  firstName: '',
  email: '',
  imageDefault:
    'https://res.cloudinary.com/ds6y4vgjb/image/upload/v1638839543/icons8-user-64_igxpij.png',
};

function User() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const { user: info, checkout } = useSelector((state) => state.users);
  const { statusUser } = useSelector((state) => state.login);
  const [listItem, setListItem] = useState();
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const nodeRef = useRef(null);

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

  //Modal
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
      border: 'none',
    },
    overlay: {
      backgroundColor: 'rgb(88 88 88 / 50%)',
      backdropFilter: 'blur(5px)',
    },
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  //===============================
  const handleChangeProfile = () => {
    setIsOpen(true);
  };

  const handleOffModal = useCallback((boolean) => {
    setIsOpen(boolean);
  }, []);

  const handleClickOpenMobile = () => {
    setIsMobile(!isMobile);
  };

  const TotalMoney = () => {
    let total = 0;
    if (listItem) {
      for (const item of listItem) {
        total += item.total;
      }
    }
    return (
      <NumberFormat
        value={total}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
        renderText={(value, props) => <Monney {...props}>{value}</Monney>}
      />
    );
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
            <Span primary="true">My Account</Span>
          </TitleName>
          <BoxInfo>
            <BoxInfoPersonal>
              <Info>
                <TitleName profile="true">
                  Personal Profile <Span>&#124;</Span>
                  <StyleLink to="" onClick={handleChangeProfile}>
                    Edit
                  </StyleLink>
                </TitleName>
                <Name>{info && info.lastName + info.firstName}</Name>
                <Email>{info?.email}</Email>
                <CheckboxMail>
                  <CheckboxMailStatus type="checkbox" />
                  <CheckboxMailText>Receive marketing emails</CheckboxMailText>
                </CheckboxMail>
              </Info>
              <CSSTransition in={modalIsOpen} timeout={300} nodeRef={nodeRef}>
                <Modal
                  appElement={document.getElementById('root')}
                  isOpen={modalIsOpen}
                  onRequestClose={closeModal}
                  style={customStyles}
                >
                  <Profile handleOffModal={handleOffModal} />
                </Modal>
              </CSSTransition>
            </BoxInfoPersonal>
            <BoxInfoPersonal full>
              <Total>
                <TitleName profile="true">Total Buy</TitleName>
                {TotalMoney()}
              </Total>
              <DivChart>
                <Chart listItem={listItem} />
              </DivChart>
            </BoxInfoPersonal>
          </BoxInfo>
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

export default User;
