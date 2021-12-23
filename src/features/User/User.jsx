import React from "react";
import PropTypes from "prop-types";
import { Container } from "globalStyles";
import styled from "styled-components";
import { BsCheck } from "react-icons/bs";
import { Link } from "react-router-dom";
import Chart from "features/Chart/Chart";
User.propTypes = {};

const Layout = styled.div`
  display: flex;
`;
const ListLink = styled.div`
  width: calc(100% / 4);
`;
const NameAccount = styled.div``;
const Verify = styled.div`
  padding: 0 16px;
  margin-bottom: 16px;
`;
const VerifyStatus = styled.span`
  background-color: #04c;
  color: white;
  border-radius: 10px;
  font-size: 10px;
  font-weight: 500;
  padding: 2px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
`;
const ManagerAccount = styled.div`
  padding: 0 16px;
  margin-bottom: 16px;
`;
const MyOrders = styled.div`
  padding: 0 16px;
`;
const BoxInfoOrders = styled.div`
  /* box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px; */
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;
const BoxInfoPersonal = styled.div`
  width: calc(100% / 3);
  padding: 16px 16px 40px 16px;
  /* box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px; */
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  margin-bottom: 16px;
  ${(props) =>
    props.full &&
    `
    width: calc(100% * 2 / 3);
    display: flex;
  `}
`;
const TitleName = styled.h2`
  font-size: 18px;
  font-weight: 500;

  ${(props) =>
    props.order &&
    `
    padding: 23px 16px;
  `}
  ${(props) =>
    props.link_1 &&
    `
        margin-bottom: 16px;
        background-color: #fafafa;
        padding: 10px 16px;
        border-left: groove;
  `}
  ${(props) =>
    props.hello &&
    `
        margin-bottom: 10px;
        padding: 0 16px;
    `}

  ${(props) =>
    props.link &&
    `
        margin-bottom: 30px;
        background-color: #fafafa;
        padding: 10px 16px;
        border-left: groove;
    `}

    ${(props) =>
    props.profile &&
    `
        display: flex;
        align-items: center;
        column-gap: 5px;
        padding: 10px 0;
    `}
`;
const SecondTitle = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  display: block;
  padding: 0 16px;
  color: #424242;
  margin-bottom: 10px;

  &:hover {
    color: #04c;
  }
`;
const Name = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 5px;
  color: #424242;
`;
const Email = styled(Name)``;
const CheckboxMail = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 0;
`;
const CheckboxMailStatus = styled.input.attrs({ type: "checkbox" })`
  width: 18px;
  height: 18px;

  &:checked {
    background-color: #4caf50;
  }
`;
const CheckboxMailText = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #424242;
  padding-left: 6px;
`;
const BoxInfo = styled.div`
  display: flex;
  column-gap: 15px;
`;
const ListLinkInfo = styled.div`
  width: calc(100% * 3 / 4);
`;
const StyleLink = styled(Link)`
  text-decoration: none;
  color: #04c;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 16px;
`;
const Span = styled.span`
  font-size: 12px;
`;
const Total = styled.div`
  width: 25%;
`;
const Monney = styled.p`
  font-size: 30px;
  font-weight: 500;
`;
const DivChart = styled.div`
  width: 75%;
  height: 212px;
`;
const TableOrders = styled.table`
  width: 100%;
  border-spacing: 0;
`;
const TrOrder = styled.tr`
  /* margin: 0; */
`;
const TdOrder = styled.td`
  padding: 10px 15px;
  border: 1px solid #eff0f5;
  border-width: 0 0 1px;
`;
const ThOrder = styled.th`
  text-align: left;
  padding: 16px 15px;
  font-size: 16px;
  font-weight: 500;
  color: #424242;
  border-width: 0 0 1px;
  background-color: #fafafa;

  ${(props) =>
    props.special &&
    `
    padding: 16px 0;
    padding-left: 35px;
  `}
`;
const DivImage = styled.div``;
const Image = styled.img`
  width: 100%;
  max-width: 80px;
  display: block;
  object-fit: cover;
`;
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
