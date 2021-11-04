import styled from "styled-components";
import Footer from "../footer/footer";
import {
  Container,
  Content,
  Layout,
  Title,
} from "../themeItem/ThemeItem.styles";
const NotFoundPage = styled.div`
  width: 100%;
  padding: 5em 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const TitleError = styled.h1`
  width: 50%;
  text-align: center;
//   display: flex;
//   align-items: center;
//   justify-content: center;

  position: relative;
  text-transform: uppercase;
  text-shadow: -15px 5px 20px #82878f
  color: #191919;
  letter-spacing: -0.05em;
  font-family: "Anton", Arial, sans-serif;
  user-select: none;
  text-transform: uppercase;
  font-size: 150px;
  transition: all 0.25s ease-out;
  letter-spacing: 16px;

  &:hover {
    text-shadow: -16px 6px 15px #ced0d3;
  }
`;
const TagH2 = styled.h2`
  width: 50%;
  text-align: center;
`;
const NotFound = () => {
  return (
    <>
      <Layout>
        <Container>
          <NotFoundPage>
            <TitleError>404</TitleError>
            <TagH2>UH OH! You're lost.</TagH2>
          </NotFoundPage>
        </Container>
      </Layout>
      <Footer />
    </>
  );
};

export default NotFound;
