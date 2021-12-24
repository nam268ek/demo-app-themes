import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Container } from "globalStyles";
import { BsCheck } from "react-icons/bs";
import Chart from "features/Chart/Chart";
import { useSelector } from "react-redux";
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
} from "./User.styles";
import { useNavigate } from "react-router-dom";
import CheckTokenExpire from "features/common/CheckTokenExpire";

User.propTypes = {};

function User(props) {
  const data = [
    {
      id: 246246,
      themeName: "Ubud",
      urlHref: "https://aspirethemes.com/images/themes/ubud/preview.webp",
      total: 100,
      dateAt: "23/12/2021",
    },
    {
      id: 246246,
      themeName: "Ubud",
      urlHref: "https://aspirethemes.com/images/themes/ubud/preview.webp",
      total: 100,
      dateAt: "23/12/2021",
    },
    {
      id: 246246,
      themeName: "Ubud",
      urlHref: "https://aspirethemes.com/images/themes/ubud/preview.webp",
      total: 100,
      dateAt: "23/12/2021",
    },
    {
      id: 246246,
      themeName: "Ubud",
      urlHref: "https://aspirethemes.com/images/themes/ubud/preview.webp",
      total: 100,
      dateAt: "23/12/2021",
    },
  ];
  const { token } = useSelector((state) => state.login);
  const navigate = useNavigate();

  useEffect(() => {
    //check user login
    const handleCheckUserLogin = () => {
      const validate = CheckTokenExpire(token);
      !validate && navigate("/login", { replace: true });
    };
    handleCheckUserLogin();
  }, [navigate, token]);

  return (
    <Container>
      <Layout>
        <ListLink>
          <NameAccount>
            <TitleName hello>Hello, Nguyễn Minh Nam</TitleName>
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
              <TitleName profile>
                Personal Profile <Span>&#124;</Span>{" "}
                <StyleLink to="">Edit</StyleLink>
              </TitleName>
              <Name>Nguyễn Minh Nam</Name>
              <Email>namnguyenexe@gmail.com</Email>
              <CheckboxMail>
                <CheckboxMailStatus type="checkbox" />
                <CheckboxMailText>Receive marketing emails</CheckboxMailText>
              </CheckboxMail>
            </BoxInfoPersonal>
            <BoxInfoPersonal full>
              <Total>
                <TitleName profile>Total Buy</TitleName>
                <Monney>$1.000</Monney>
              </Total>
              <DivChart>
                <Chart />
              </DivChart>
            </BoxInfoPersonal>
          </BoxInfo>
          <BoxInfoOrders>
            <TitleName order>Recent Orders</TitleName>
            <TableOrders>
              <colgroup>
                <col width="18%" />
                <col width="16%" />
                <col width="20%" />
                <col width="30%" />
                <col width="20%" />
              </colgroup>
              <TrOrder>
                <ThOrder>Order #</ThOrder>
                <ThOrder>Theme</ThOrder>
                <ThOrder>Placed On</ThOrder>
                <ThOrder special>Items</ThOrder>
                <ThOrder>Total</ThOrder>
              </TrOrder>
              {data.map((item) => (
                <TrOrder key={item.id}>
                  <TdOrder>{item.id}</TdOrder>
                  <TdOrder>{item.themeName}</TdOrder>
                  <TdOrder>{item.dateAt}</TdOrder>
                  <TdOrder>
                    <DivImage>
                      <Image src={item.urlHref} width="80px" alt="" />
                    </DivImage>
                  </TdOrder>
                  <TdOrder>{item.total}</TdOrder>
                </TrOrder>
              ))}
              {/* <TrOrder>
                <TdOrder>123456</TdOrder>
                <TdOrder>Ubud</TdOrder>
                <TdOrder>23/12/2021</TdOrder>
                <TdOrder>
                  <DivImage>
                    <Image
                      src="https://aspirethemes.com/images/themes/ubud/preview.webp"
                      width="80px"
                      alt=""
                    />
                  </DivImage>
                </TdOrder>
                <TdOrder>1000</TdOrder>
              </TrOrder> */}
            </TableOrders>
          </BoxInfoOrders>
        </ListLinkInfo>
      </Layout>
    </Container>
  );
}

export default User;
