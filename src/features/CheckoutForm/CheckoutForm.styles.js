import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { PaymentElement } from '@stripe/react-stripe-js';
//   body {
//     font-family: -apple-system, BlinkMacSystemFont, sans-serif;
//     font-size: 16px;
//     -webkit-font-smoothing: antialiased;
//     display: flex;
//     justify-content: center;
//     align-content: center;
//     height: 100vh;
//     width: 100vw;
//   }
export const CheckoutFormStyles = styled.form`
  width: 30vw;
  min-width: 500px;
  align-self: center;
  box-shadow: 0px 0px 0px 0.5px rgba(50, 50, 93, 0.1), 0px 2px 5px 0px rgba(50, 50, 93, 0.1),
    0px 1px 1.5px 0px rgba(0, 0, 0, 0.07);
  border-radius: 7px;
  padding: 40px;

  @mefia screen and (max-width: 600px) {
    width: 80vw;
    min-width: initial;
  }
`;
export const Email = styled.input`
  border-radius: 6px;
  margin-bottom: 16px;
  padding: 12px;
  border: 1px solid rgba(50, 50, 93, 0.1);
  max-height: 44px;
  font-size: 16px;
  width: 100%;
  background: white;
  box-sizing: border-box;
`;

export const PaymentElementStyle = styled(PaymentElement)`
  margin-bottom: 24px;
`;
export const PaymentMessage = styled.div`
  color: rgb(105, 115, 134);
  font-size: 16px;
  line-height: 20px;
  padding-top: 12px;
  text-align: center;
`;
export const PayButton = styled.button`
  background: #5469d4;
  font-family: Arial, sans-serif;
  color: #ffffff;
  border-radius: 4px;
  border: 0;
  padding: 12px 16px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  display: block;
  transition: all 0.2s ease;
  box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
  width: 100%;

  &:hover {
    filter: contrast(115%);
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;
export const loading = keyframes`
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  `;

export const Spinner = styled.div`
  border-radius: 50%;

  &:before,
  &:after {
    border-radius: 50%;
  }

  color: #ffffff;
  font-size: 22px;
  text-indent: -99999px;
  margin: 0px auto;
  position: relative;
  width: 20px;
  height: 20px;
  box-shadow: inset 0 0 0 2px;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);

  &:before,
  &:after {
    position: absolute;
    content: '';
  }

  &::after {
    width: 10.4px;
    height: 10.2px;
    background: #5469d4;
    border-radius: 0 10.2px 10.2px 0;
    top: -0.1px;
    left: 10.2px;
    -webkit-transform-origin: 0px 10.2px;
    transform-origin: 0px 10.2px;
    -webkit-animation: ${loading} 2s infinite ease;
    animation: ${loading} 2s infinite ease;
  }
`;
