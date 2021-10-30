import styled from "styled-components";
import Footer from "../footer/footer";
import OnTop from "../onTop/onTop";
import "./contact.scss";

const Contact = () => {
  const TextArea = styled.textarea`
    margin: 0 0 24px;
    width: 743px;
    height: 244px;
  `;
  const Input = styled.input`
    padding: 16px 32px;
    background-color: #001fff;
    color: white;
    font-weight: 500;
    border: 0;
    border-radius: 2px;
    display: inline-block;

    &:hover {
      background-color: #04c;
      color: white;
    }

    &:focus {
      outline-offset: 2px;
      outline: 2px solid #001fff;
    }
  `;

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
        <div className="gird-layout__container">
          <div className="gird-layout__container-content">
            <div className="content-col-1 content-contact">
              <div className="content-col-1__header">
                <div className="content-col-1__header-left">
                  <p>I’m Ahmad, the creator of Aspire Themes.</p>
                  <p>
                    Do you have any questions? Just fill out the form below. I
                    will get back to you at the earliest opportunity.
                  </p>
                  <p>Or you can drop me a line at ahmad@aspirethemes.com</p>
                </div>
                <div className="content-col-1__header-right">
                  <img
                    src="https://d33wubrfki0l68.cloudfront.net/999476c9898c6ee5228f6dfc2a131edfd1a8f8ed/cfa5e/images/assets/ahmad.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="content-col-1__form-contact">
                <form>
                  <input
                    className="form-subs__input"
                    type="text"
                    placeholder="Your name"
                  />
                  <input
                    className="form-subs__input"
                    type="text"
                    placeholder="Your email"
                  />
                  <TextArea
                    className="form-subs__input"
                    placeholder="Your message… 
If you have a theme issue, please be specific. Saying that something is ‘not working’ is not helpful. Instead, you can share your URL, the issue in detail, a screenshot, what you have done, and so on. Make sure you are using the latest Ghost and theme versions."
                  ></TextArea>
                  <Input type="submit" value="Send message →" />
                </form>
              </div>
            </div>
            <div className="content-col-2">
              <div className="content-col-2__note">
                <p className="background-color-highlight">Kindly note that:)</p>
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
