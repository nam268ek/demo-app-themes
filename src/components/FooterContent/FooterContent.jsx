import React, { useState } from 'react';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { Container } from 'globalStyles';
import {
  Layout,
  Colum,
  Form,
  Input,
  TagP,
  Copy,
  Content,
  CopyText,
  CopyLink,
  StyleLink,
  ColumLink,
  Hr,
  Line,
} from './FooterContent.styles';

const FooterContent = () => {
  const [email, setEmail] = useState('');

  const handleOnChange = (e) => {
    setEmail(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const schema = yup.object().shape({
      email: yup.string().email(),
    });
    //validate email
    schema.isValid({ email: e.target[0].value }).then((value) => {
      toast.configure({
        theme: 'colored',
        autoClose: 3000,
      });

      if (value) {
        toast.success('Thank you for subscribing!');
        setEmail('');
      } else {
        toast.error('Please enter a valid email address');
      }
    });
  };

  return (
    <Layout>
      <Line />
      <Container>
        <ColumLink>
          <Colum>
            <StyleLink to="">About</StyleLink>
            <StyleLink to="">Twitter</StyleLink>
            <StyleLink to="">Github</StyleLink>
            <StyleLink to="">Loom</StyleLink>
            <StyleLink to="">Youtube</StyleLink>
            <StyleLink to="">Blog RSS Feed</StyleLink>
          </Colum>
          <Colum>
            <StyleLink to="">Affiliate</StyleLink>
            <StyleLink to="">Changelogs</StyleLink>
            <StyleLink to="">Ghost Tips & Tricks</StyleLink>
            <StyleLink to="">Ghost Insprire</StyleLink>
            <StyleLink to="">Ghost(Pro) Hosting</StyleLink>
          </Colum>
          <Colum>
            <Form onSubmit={handleOnSubmit}>
              <TagP>Subscribe to receive Ghost resources, new themes, and updates.</TagP>
              <Input type="text" placeholder="Your email" value={email} onChange={handleOnChange} />
            </Form>
          </Colum>
        </ColumLink>
      </Container>
      <Container>
        <Copy>
          <Content>
            <Hr />
          </Content>
          <Content>
            <CopyText>© 2021 Aspire Themes</CopyText>
            <CopyLink>
              <StyleLink secondary="true" to="">
                FAQ
              </StyleLink>
              <StyleLink secondary="true" to="">
                Terms
              </StyleLink>
            </CopyLink>
          </Content>
        </Copy>
      </Container>
    </Layout>
  );
};

export default FooterContent;
