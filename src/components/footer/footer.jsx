import { Link } from "react-router-dom";
import * as yup from "yup";
import "./footer.scss";
import { toast } from "react-toastify";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

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
        theme: "colored",
        autoClose: 3000,
      });

      if (value) {
        toast.success("Thank you for subscribing!");
        setEmail("");
      } else {
        toast.error("Please enter a valid email address");
      }
    });
  };

  return (
    <footer>
      <div className="footer__gird">
        <div className="footer-container-sosial">
          <div className="sosial-col-1">
            <Link to="!#" className="footer-sosial-link">
              About
            </Link>
            <Link to="!#" className="footer-sosial-link">
              Twitter
            </Link>
            <Link to="!#" className="footer-sosial-link">
              Github
            </Link>
            <Link to="!#" className="footer-sosial-link">
              Loom
            </Link>
            <Link to="!#" className="footer-sosial-link">
              Youtube
            </Link>
            <Link to="!#" className="footer-sosial-link">
              Blog RSS Feed
            </Link>
          </div>
          <div className="sosial-col-2">
            <Link to="!#" className="footer-sosial-link">
              Affiliate
            </Link>
            <Link to="!#" className="footer-sosial-link">
              Changelogs
            </Link>
            <Link to="!#" className="footer-sosial-link">
              Ghost Tips & Tricks
            </Link>
            <Link to="!#" className="footer-sosial-link">
              Ghost Insprire
            </Link>
            <Link to="!#" className="footer-sosial-link">
              Ghost(Pro) Hosting
            </Link>
          </div>
          <div className="sosial-col-3">
            <form className="form-subs" onSubmit={handleOnSubmit}>
              <p className="form-subs__title">
                Subscribe to receive Ghost resources, new themes, and updates.
              </p>
              <input
                className="form-subs__input"
                type="text"
                placeholder="Your email"
                value={email}
                onChange={handleOnChange}
              />
            </form>
          </div>
        </div>
        <div className="footer-container-copyright">
          <div className="footer-copy">
            <div className="footer-content">
              <p className="footer-copy-text">© 2021 Aspire Themes</p>
              <div className="footer-copy-link">
                <Link to="!#" className="faq">
                  FAQ
                </Link>
                <Link to="!#" className="terms">
                  Terms
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
