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

const FeedBackSecond = () => {
  return (
    <Layout>
      <Container>
        <Center>
          <Content>
            <DivLeft>
              <Title>
                &#34;I just <Highlight>bought the whole theme bundle</Highlight> from Ahmad this
                morning. I am currently redoing my German blog using the Nubia theme and{' '}
                <Highlight>love it</Highlight>.&#34;
              </Title>
              <StyleLink to="">Marco Zehe</StyleLink>
              <TagP>Accessibility Engineer — Mozilla</TagP>
            </DivLeft>
            <DivRight>
              <Image
                src="https://d33wubrfki0l68.cloudfront.net/a3ffa63c8155e30ad55ce68a9e1f48de8bc3f988/96502/images/testimonials/marcozehe.jpg"
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

export default FeedBackSecond;
