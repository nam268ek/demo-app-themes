import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Layout = styled.div`
  display: flex;
`;
export const ListLink = styled.div`
  width: calc(100% / 4);
`;
export const NameAccount = styled.div``;
export const Verify = styled.div`
  padding: 0 16px;
  margin-bottom: 16px;
`;
export const VerifyStatus = styled.span`
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
export const ManagerAccount = styled.div`
  padding: 0 16px;
  margin-bottom: 16px;
`;
export const MyOrders = styled.div`
  padding: 0 16px;
`;
export const BoxInfoOrders = styled.div`
  /* box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px; */
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;
export const BoxInfoPersonal = styled.div`
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
export const TitleName = styled.h2`
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
export const SecondTitle = styled(Link)`
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
export const Name = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 5px;
  color: #424242;
`;
export const Email = styled(Name)``;
export const CheckboxMail = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 0;
`;
export const CheckboxMailStatus = styled.input.attrs({ type: "checkbox" })`
  width: 18px;
  height: 18px;

  &:checked {
    background-color: #4caf50;
  }
`;
export const CheckboxMailText = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #424242;
  padding-left: 6px;
`;
export const BoxInfo = styled.div`
  display: flex;
  column-gap: 15px;
`;
export const ListLinkInfo = styled.div`
  width: calc(100% * 3 / 4);
`;
export const StyleLink = styled(Link)`
  text-decoration: none;
  color: #04c;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 16px;
`;
export const Span = styled.span`
  font-size: 12px;
`;
export const Total = styled.div`
  width: 25%;
`;
export const Monney = styled.p`
  font-size: 30px;
  font-weight: 500;
`;
export const DivChart = styled.div`
  width: 75%;
  height: 212px;
`;
export const TableOrders = styled.table`
  width: 100%;
  border-spacing: 0;
`;
export const TrOrder = styled.tr`
  /* margin: 0; */
`;
export const TdOrder = styled.td`
  padding: 10px 15px;
  border: 1px solid #eff0f5;
  border-width: 0 0 1px;
`;
export const ThOrder = styled.th`
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
export const DivImage = styled.div``;
export const Image = styled.img`
  width: 100%;
  max-width: 80px;
  display: block;
  object-fit: cover;
`;