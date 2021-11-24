import { PropTypes } from "prop-types";
import LazyLoad from "react-lazyload";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./showcaseCard.scss";

const ShowcaseCard = ({
  propertyId,
  showCase,
  propertyName,
  themeList,
  title,
}) => {
  const { pathname: url } = useLocation();
  const navigate = useNavigate();

  const handleNavigate = (e) => {
    e.preventDefault();
    navigate("/themes", { replace: true });
  };

  return (
    <div className={url === "/" ? "cardtheme__selection" : ""}>
      <div className="cardtheme__selection__container">
        <div className="cardtheme__selection__container-title">
          <h1 className="theme-lastest mb-0">{title}</h1>
        </div>
        <div className="showcase__text-secondary p-lr-16">
          <p className="text-secondary">
            Themes truly come alive when used by real websites. Prepare to get
            inspired!
          </p>
          {url === "/" && (
            <Link to="!#" className="text-secondary-link">
              Explore more examples
            </Link>
          )}
        </div>
        <div className="showcase__btn--small p-lr-16">
          {themeList.map((item) => (
            <Link
              key={item[propertyId]}
              to={`/showcase/${item[propertyName].toLowerCase()}`}
              className="showcase__btn--small-link"
            >
              {item[propertyName]}
            </Link>
          ))}
        </div>
        <div className="cardtheme__selection__container-content">
          {showCase.map((item) => (
            <div key={item[propertyId]} className="showcase-template">
              <Link
                to=""
                className="showcase-template__item"
                onClick={handleNavigate}
              >
                <LazyLoad offset={-150} classNamePrefix="lazyload">
                  <img
                    src={item.image}
                    alt=""
                    className="template-item"
                    width="354"
                    height="265"
                    loading="lazy"
                    decoding="async"
                  />
                </LazyLoad>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
ShowcaseCard.propTypes = {
  propertyId: PropTypes.string,
  showCase: PropTypes.array,
  themeList: PropTypes.array,
  propertyName: PropTypes.string,
};
ShowcaseCard.defaultProps = {
  propertyId: "id",
  propertyName: "name",
  showCase: [],
  themeList: [],
};
export default ShowcaseCard;
