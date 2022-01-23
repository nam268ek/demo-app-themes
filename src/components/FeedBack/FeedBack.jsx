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

const FeedBack = () => {
  return (
    <Layout>
      <Container>
        <Center>
          <Content>
            <DivLeft>
              <Title>
                &#34;If you happen to be looking for Ghost CMS themes, check out @aspirethemes I use
                one of their themes for Glimmering and{' '}
                <Highlight>love their work. Excellent design, code, and support.&#34;</Highlight>
              </Title>
              <StyleLink to="">Leslie Camacho</StyleLink>
              <TagP>Co-Founder — Glimmering LLC</TagP>
            </DivLeft>
            <DivRight>
              <Image
                src="https://d33wubrfki0l68.cloudfront.net/fb3f19d7cc6af774f792398be54409b9ddc4a138/cbb9d/images/testimonials/lesliecamacho.jpg"
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

export default FeedBack;
