import styled from "styled-components";

export const Footer = styled.footer``;
export const Main = styled.main`
  display: block;
`;
export const Canvas = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 1023px) {
    ${(props) =>
      props.statusOpen
        ? `transform: translate3d(-300px, 0, 0);`
        : `transform: none`}
  }
`;
