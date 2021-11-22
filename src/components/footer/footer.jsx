import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer__gird">
        <div className="footer-container-sosial">
          <div className="sosial-col-1">
            <a href="!#" className="footer-sosial-link">
              About
            </a>
            <a href="!#" className="footer-sosial-link">
              Twitter
            </a>
            <a href="!#" className="footer-sosial-link">
              Github
            </a>
            <a href="!#" className="footer-sosial-link">
              Loom
            </a>
            <a href="!#" className="footer-sosial-link">
              Youtube
            </a>
            <a href="!#" className="footer-sosial-link">
              Blog RSS Feed
            </a>
          </div>
          <div className="sosial-col-2">
            <a href="!#" className="footer-sosial-link">
              Affiliate
            </a>
            <a href="!#" className="footer-sosial-link">
              Changelogs
            </a>
            <a href="!#" className="footer-sosial-link">
              Ghost Tips & Tricks
            </a>
            <a href="!#" className="footer-sosial-link">
              Ghost Insprire
            </a>
            <a href="!#" className="footer-sosial-link">
              Ghost(Pro) Hosting
            </a>
          </div>
          <div className="sosial-col-3">
            <form action="" className="form-subs">
              <p className="form-subs__title">
                Subscribe to receive Ghost resources, new themes, and updates.
              </p>
              <input
                className="form-subs__input"
                type="text"
                placeholder="Your email"
              />
            </form>
          </div>
        </div>
        <div className="footer-container-copyright">
          <div className="footer-copy">
            <div className="footer-content">
              <p className="footer-copy-text">© 2021 Aspire Themes</p>
              <div className="footer-copy-link">
                <a href="!#" className="faq">
                  FAQ
                </a>
                <a href="!#" className="terms">
                  Terms
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
