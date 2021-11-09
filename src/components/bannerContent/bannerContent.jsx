import { Link } from "react-router-dom";
import "./bannerContent.scss";

const BannerContent = () => {
  return (
    <div className="banner">
      <div className="banner__content-1">
        <h1>
          Write more <br /> Save time & money
        </h1>
        <p>
          Ghost CMS themes for a professional-looking website. Newsletter &
          membership full support.
        </p>
        <Link to="/themes" className="btn__btn-primary">
          Choose your theme →
        </Link>
        <ul className="content-1 u-mt-8">
          <li className="content-1__points">
            <span className="mr-4">
              <i className="fas fa-check c-icon"></i>
            </span>
            Ghost 4 Support
          </li>
          <li className="content-1__points">
            <span className="mr-4">
              <i className="fas fa-check c-icon"></i>
            </span>
            Free Support & Updates
          </li>
          <li className="content-1__points">
            <span className="mr-4">
              <i className="fas fa-check c-icon"></i>
            </span>
            100% Money Back Guarantee
          </li>
        </ul>
      </div>
      <div className="banner__content-2">
        <img
          className="content-2__img"
          src="https://aspirethemes.com/images/themes/bundle/bundle_small.webp"
          alt=""
          width="552"
          height="345"
          loading="eager"
        />
      </div>
    </div>
  );
};

export default BannerContent;
