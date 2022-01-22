import React from 'react';
import { Container } from 'globalStyles';
import {
  Layout,
  Content,
  DivLeft,
  DivRight,
  Title,
  StyleLink,
  Image,
  TagP,
  Highlight,
  Center,
} from './FeedBack.styles';

const FeedBackThree = () => {
  return (
    <Layout>
      <Container>
        <Center>
          <Content>
            <DivLeft>
              <Title>
                &#34;I can honestly say I&#34;ve been hugely impressed with @Ghost and{' '}
                <Highlight>the themes from @aspirethemes are beautifully simple</Highlight>. Thank
                you! &#34;
              </Title>
              <StyleLink to="">Tom Bell</StyleLink>
              <TagP>Cyber Security Consultant — Roke</TagP>
            </DivLeft>
            <DivRight>
              <Image
                src="https://d33wubrfki0l68.cloudfront.net/5d62aa019cc252618b2aa45bc27343da90c10975/6c619/images/testimonials/tombell.jpg"
                loading="lazy"
                width="112"
                height="112"
              />
            </DivRight>
          </Content>
        </Center>
      </Container>
    </Layout>
  );
};

export default FeedBackThree;
