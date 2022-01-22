import Error from 'components/Errors/Error';
import InputField from 'custom-fields/InputField';
import TextAreaField from 'custom-fields/TextAreaField';
import { ErrorMessage, FastField, Formik } from 'formik';
import { Container } from 'globalStyles';
import React from 'react';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import {
  ContactForm,
  ContactHeader,
  ContactNote,
  Content,
  CustomDiv,
  DivContact,
  FormButton,
  FormInput,
  FormTextArea,
  Header,
  Hr,
  Image,
  Layout,
  LayOutForm,
  Left,
  Note,
  Right,
  Span,
  TagLi,
  TagP,
  TagUl,
  TitleH1,
} from './Contact.styles';

const Contact = () => {
  const initialValues = {
    name: '',
    email: '',
    message: '',
    button: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Minimum 2 characters')
      .max(20, 'Must be 20 characters or less')
      .required('This field is required!'),

    email: Yup.string().email('Invalid email address').required('This field is required!'),

    message: Yup.string().min(10, 'Minimum 10 characters').required('This field is required!'),
  });

  const onSubmit = (value, actions) => {
    actions.setSubmitting(false);
    actions.resetForm();
    toast.configure({ theme: 'colored' });
    toast.success('Message sent successfully', { theme: 'colored' });
  };

  return (
    <>
      <Layout>
        <Container>
          <Header>
            <TitleH1>Hey! 👋</TitleH1>
            <CustomDiv>
              <Hr />
            </CustomDiv>
          </Header>
        </Container>
        <Container>
          <Content>
            <DivContact>
              <ContactHeader>
                <Left>
                  <TagP>I&#39;m Ahmad, the creator of Aspire Themes.</TagP>
                  <TagP>
                    Do you have any questions? Just fill out the form below. I will get back to you
                    at the earliest opportunity.
                  </TagP>
                  <TagP>
                    {' '}
                    Or you can drop me a line at <Span>ahmad@aspirethemes.com</Span>
                  </TagP>
                </Left>
                <Right>
                  <Image src="https://d33wubrfki0l68.cloudfront.net/999476c9898c6ee5228f6dfc2a131edfd1a8f8ed/cfa5e/images/assets/ahmad.jpg"></Image>
                </Right>
              </ContactHeader>
              <ContactForm>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={onSubmit}
                >
                  {() => {
                    return (
                      <LayOutForm>
                        {/* <Form> */}
                        <FormInput>
                          <FastField
                            name="name"
                            component={InputField}
                            type="text"
                            placeholder="Your name"
                            className="form-subs__input"
                          />
                          <ErrorMessage
                            name="name"
                            render={(msg) => <Error title="Name" message={msg} />}
                          />
                        </FormInput>
                        <FormInput>
                          <FastField
                            name="email"
                            component={InputField}
                            type="text"
                            placeholder="Your email"
                            className="form-subs__input"
                          />
                          <ErrorMessage
                            name="email"
                            render={(msg) => <Error title="Email" message={msg} />}
                          />
                        </FormInput>
                        <FormTextArea>
                          <FastField
                            name="message"
                            component={TextAreaField}
                            placeholder="Your message… 
                            If you have a theme issue, please be specific. Saying that something is ‘not working’ is not helpful. Instead, you can share your URL, the issue in detail, a screenshot, what you have done, and so on. Make sure you are using the latest Ghost and theme versions."
                            className="form-subs__input"
                          />
                          <ErrorMessage
                            name="message"
                            render={(msg) => <Error title="Message" message={msg} />}
                          />
                        </FormTextArea>
                        <FormButton>
                          <FastField
                            name="button"
                            component={InputField}
                            useStyled={true}
                            type="submit"
                            valueSubmit="Send message →"
                          />
                        </FormButton>
                        {/* </Form> */}
                      </LayOutForm>
                    );
                  }}
                </Formik>
              </ContactForm>
            </DivContact>
            <ContactNote>
              <Note>
                <TagP contactHighlight>Kindly note that:)</TagP>
                <TagUl>
                  <TagLi>
                    The documentation has everything for a successful theme setup. So please
                    carefully read your theme documentation.
                  </TagLi>
                  <TagLi>
                    Your theme support service covers questions about theme functionality and helps
                    with feature configuration and the removal of bugs or issues.
                  </TagLi>
                  <TagLi>
                    Your theme support service does not cover theme customizations or help to fix
                    Ghost setup issues.
                  </TagLi>
                  <TagLi>
                    The FAQ and Terms pages contain many answers to many questions you might have.
                  </TagLi>
                  <TagLi>
                    I’m not available for paid custom work or paid theme customizations.
                  </TagLi>
                  <TagLi>Working times: Monday to Friday from 9:00 AM to 5:00 PM (GMT+2).</TagLi>
                </TagUl>
              </Note>
            </ContactNote>
          </Content>
        </Container>
      </Layout>
    </>
  );
};

export default Contact;
