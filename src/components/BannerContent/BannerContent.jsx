import React from 'react';
import {
  Content,
  Title,
  TagP,
  StyleLink,
  ListNote,
  ListNoteItem,
  Span,
  Image,
  Layout,
} from './BannerContent.styles';
import { Container } from 'globalStyles';
const BannerContent = () => {
  return (
    <Container>
      <Layout>
        <Content>
          <Title>
            Write more <br /> Save time & money
          </Title>
          <TagP>
            Ghost CMS themes for a professional-looking website. Newsletter & membership full
            support.
          </TagP>
          <StyleLink to="/themes">Choose your theme →</StyleLink>
          <ListNote>
            <ListNoteItem>
              <Span>
                <i className="fas fa-check" style={{ color: '#001fff' }}></i>
              </Span>
              Ghost 4 Support
            </ListNoteItem>
            <ListNoteItem>
              <Span>
                <i className="fas fa-check" style={{ color: '#001fff' }}></i>
              </Span>
              Free Support & Updates
            </ListNoteItem>
            <ListNoteItem>
              <Span>
                <i className="fas fa-check" style={{ color: '#001fff' }}></i>
              </Span>
              100% Money Back Guarantee
            </ListNoteItem>
          </ListNote>
        </Content>
        <Content primary="true">
          <Image
            src="https://aspirethemes.com/images/themes/bundle/bundle_small.webp"
            alt=""
            width="552"
            height="345"
            loading="eager"
          />
        </Content>
      </Layout>
    </Container>
  );
};

export default BannerContent;
