import { Container } from "globalStyles";
import {
  DivImage,
  Image,
  Content,
  Title,
  Desc,
  StyleLink,
  Layout,
} from "./Creator.styles";

const Creator = () => {
  return (
    <Container>
      <Layout>
        <DivImage>
          <Image src="https://d33wubrfki0l68.cloudfront.net/2cfb99bb83d70b25eec3b6d7019b21d4b8e1403d/35535/images/assets/ahmad-714-510.jpg" />
        </DivImage>
        <Content>
          <Title>Hi, I’m Ahmad Ajmi, the creator of Aspire Themes.</Title>
          <Desc>
            I have been doing Ghost themes since 2016. I created Aspire Themes
            to provide simple, well-designed, and functional Ghost themes.{" "}
            <StyleLink to="!#">Read the full story.</StyleLink>
            <br />
            <br />
            Feel free to reach out on <StyleLink to="!#">Twitter.</StyleLink>
          </Desc>
        </Content>
      </Layout>
    </Container>
  );
};

export default Creator;
