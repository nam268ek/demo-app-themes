import React, { useCallback, useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import { Container } from "globalStyles";
import { BsCheck } from "react-icons/bs";
import Chart from "features/Chart/Chart";
import { useDispatch, useSelector } from "react-redux";
import Moment from "react-moment";
import {
  Layout,
  ListLink,
  ListLinkInfo,
  BoxInfo,
  BoxInfoOrders,
  BoxInfoPersonal,
  TitleName,
  Name,
  Email,
  CheckboxMail,
  CheckboxMailStatus,
  CheckboxMailText,
  Verify,
  VerifyStatus,
  NameAccount,
  ManagerAccount,
  MyOrders,
  SecondTitle,
  Span,
  StyleLink,
  Total,
  DivChart,
  DivImage,
  Image,
  TrOrder,
  ThOrder,
  TdOrder,
  Monney,
  TableOrders,
  Info,
  Thead,
  TBody,
} from "./User.styles";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { logOut } from "features/Login/loginSlice";
import { toast } from "react-toastify";
import Profile from "features/Profile/Profile";
import Modal from "react-modal";
import { CSSTransition } from "react-transition-group";
import NumberFormat from "react-number-format";
import TableScrollbar from "react-table-scrollbar";
import "./transition.css";
import { getDataPurchase } from './userSlice';

User.propTypes = {
  user: PropTypes.object,
};

User.defaultProps = {
  user: {},
  imageDefault:
    "https://res.cloudinary.com/ds6y4vgjb/image/upload/v1638839543/icons8-user-64_igxpij.png",
};

function User() {
  //Modal
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
      border: "none",
    },
    overlay: {
      backgroundColor: "rgb(88 88 88 / 50%)",
      backdropFilter: "blur(5px)",
    },
  };

  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  // const data = [];
  const { token } = useSelector((state) => state.login);
  const { user, checkout } = useSelector((state) => state.users);
  const { data: info } = user;
  const [listItem, setListItem] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const nodeRef = useRef(null);

  useEffect(() => {

    //handle redirect to login 
    const handleRedirect = () => {
      if (!token) {
        navigate("/login");
      }
    };

    // handle get checkout
    const handleGetCheckout = () => {
      if (!checkout) {
        dispatch(getDataPurchase());
      }
    };
    handleGetCheckout();

    //==================
    //handle detail render
    const handleOrderDetail = () => {
      const { data } = checkout;
      var orderList = [];

      if (data) {
        for (const item of data) {
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
  }, [navigate, token, checkout, dispatch]);

  //===============================
  const handleChangeProfile = () => {
    setIsOpen(true);
  };

  const handleOffModal = useCallback((boolean) => {
    setIsOpen(boolean);
  }, []);

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
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        renderText={(value, props) => <Monney {...props}>{value}</Monney>}
      />
    );
  };

  return (
    <Container>
      <Layout>
        <ListLink>
          <NameAccount>
            <TitleName hello>
              Hello, {info && info.lastName + info.firstName}
            </TitleName>
            <Verify>
              <VerifyStatus>
                <BsCheck size={16} />
                Verified Account
              </VerifyStatus>
            </Verify>
          </NameAccount>
          <ManagerAccount>
            <TitleName link_1>Manage My Account</TitleName>
            <SecondTitle to="">My profile</SecondTitle>
          </ManagerAccount>
          <MyOrders>
            <TitleName link_1>My Orders</TitleName>
            <SecondTitle to="">My Completed</SecondTitle>
            <SecondTitle to="">My Cancellations</SecondTitle>
          </MyOrders>
        </ListLink>
        <ListLinkInfo>
          <TitleName link>My Account</TitleName>
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
                  appElement={document.getElementById("root")}
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
            {/* <TableScrollbar rows={5}> */}
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
                    <TdOrder>
                      {<Moment format="DD/MM/YYYY">{item.dateAt}</Moment>}
                    </TdOrder>
                    <TdOrder>
                      <DivImage>
                        <Image
                          detail="true"
                          src={item.urlHref}
                          width="80px"
                          alt=""
                        />
                      </DivImage>
                    </TdOrder>
                    <>
                      {
                        <NumberFormat
                          value={item.total}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={"$"}
                          renderText={(value, props) => (
                            <TdOrder {...props}>{value}</TdOrder>
                          )}
                        />
                      }
                    </>
                  </TrOrder>
                ))}
              </TBody>
            </TableOrders>
            {/* </TableScrollbar> */}
          </BoxInfoOrders>
        </ListLinkInfo>
      </Layout>
    </Container>
  );
}

export default User;
