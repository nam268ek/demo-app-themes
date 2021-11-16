import { Formik, Form, FastField, ErrorMessage } from "formik";
import { toast } from "react-toastify";
import * as Yup from "yup";

import InputField from "custom-fields/InputField";
import TextAreaField from "custom-fields/TextAreaField";
import Footer from "components/footer/footer";
import OnTop from "components/onTop/onTop";
import Error from "components/Errors/Error";
import "./contact.scss";

const Contact = () => {
  const initialValues = {
    name: "",
    email: "",
    message: "",
    button: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Minimum 2 characters")
      .max(20, "Must be 20 characters or less")
      .required("This field is required!"),

    email: Yup.string()
      .email("Invalid email address")
      .required("This field is required!"),

    message: Yup.string()
      .min(10, "Minimum 10 characters")
      .required("This field is required!"),
  });

  const onSubmit = (value, actions) => {
    actions.setSubmitting(false);
    actions.resetForm();
    toast.configure({ theme: "colored" });
    toast.success("Message sent successfully", { theme: "colored" });
  };

  return (
    <>
      <div className="gird-layout p-0">
        <div className="gird-layout__container">
          <div className="gird-layout__container-header">
            <h1>Hey! 👋</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className="gird-layout p-0">
        <div className="gird-layout__container p-lr-14">
          <div className="gird-layout__container-content">
            <div className="content-col-1 content-contact">
              <div className="content-col-1__header">
                <div className="content-col-1__header-left">
                  <p>I’m Ahmad, the creator of Aspire Themes.</p>
                  <p>
                    Do you have any questions? Just fill out the form below. I
                    will get back to you at the earliest opportunity.
                  </p>
                  <p>
                    Or you can drop me a line at{" "}
                    <span style={{ fontWeight: 500 }}>
                      ahmad@aspirethemes.com
                    </span>
                  </p>
                </div>
                <div className="content-col-1__header-right">
                  <img
                    src="https://d33wubrfki0l68.cloudfront.net/999476c9898c6ee5228f6dfc2a131edfd1a8f8ed/cfa5e/images/assets/ahmad.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="content-col-1__form-contact">
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={onSubmit}
                >
                  {(formikProps) => {
                    return (
                      <Form>
                        <div className="content-col-1__form-contact-col">
                          <FastField
                            name="name"
                            component={InputField}
                            type="text"
                            placeholder="Your name"
                            className="form-subs__input"
                          />
                          <ErrorMessage
                            name="name"
                            render={(msg) => (
                              <Error title="Name" message={msg} />
                            )}
                          />
                        </div>
                        <div className="content-col-1__form-contact-col">
                          <FastField
                            name="email"
                            component={InputField}
                            type="text"
                            placeholder="Your email"
                            className="form-subs__input"
                          />
                          <ErrorMessage
                            name="email"
                            render={(msg) => (
                              <Error title="Email" message={msg} />
                            )}
                          />
                        </div>
                        <div className="content-col-1__form-contact-textarea">
                          <FastField
                            name="message"
                            component={TextAreaField}
                            placeholder="Your message… 
                            If you have a theme issue, please be specific. Saying that something is ‘not working’ is not helpful. Instead, you can share your URL, the issue in detail, a screenshot, what you have done, and so on. Make sure you are using the latest Ghost and theme versions."
                            className="form-subs__input"
                          />
                          <ErrorMessage
                            name="message"
                            render={(msg) => (
                              <Error title="Message" message={msg} />
                            )}
                          />
                        </div>
                        <div className="content-col-1__form-contact-submit">
                          <FastField
                            name="button"
                            component={InputField}
                            useStyled={true}
                            type="submit"
                            valueSubmit="Send message →"
                          />
                        </div>
                      </Form>
                    );
                  }}
                </Formik>
              </div>
            </div>
            <div className="content-col-2 p-lr-16 bg-white">
              <div className="content-col-2__note">
                <p className="background-color-highlight content-col-2__note-title">
                  Kindly note that:)
                </p>
                <ul>
                  <li>
                    The documentation has everything for a successful theme
                    setup. So please carefully read your theme documentation.
                  </li>
                  <li>
                    Your theme support service covers questions about theme
                    functionality and helps with feature configuration and the
                    removal of bugs or issues.
                  </li>
                  <li>
                    Your theme support service does not cover theme
                    customizations or help to fix Ghost setup issues.
                  </li>
                  <li>
                    The FAQ and Terms pages contain many answers to many
                    questions you might have.
                  </li>
                  <li>
                    I’m not available for paid custom work or paid theme
                    customizations.
                  </li>
                  <li>
                    Working times: Monday to Friday from 9:00 AM to 5:00 PM
                    (GMT+2).
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <OnTop />
    </>
  );
};

export default Contact;
