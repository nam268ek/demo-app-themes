import { PropTypes } from "prop-types";
import "./showcaseCard.scss";
import LazyLoad from "react-lazyload";
import { useLocation } from "react-router-dom";

const ShowcaseCard = ({
  propertyId,
  showCase,
  propertyName,
  themeList,
  title,
  props,
}) => {
  const a = useLocation();
  console.log("showcase", a);
  const url = useLocation();
  return (
    <div className="cardtheme__selection">
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
            <a href="!#" className="text-secondary-link">
              Explore more examples
            </a>
          )}
        </div>
        <div className="showcase__btn--small p-lr-16">
          {themeList.map((item) => (
            <a
              key={item[propertyId]}
              href="!#"
              className="showcase__btn--small-link"
            >
              {item[propertyName]}
            </a>
          ))}
        </div>
        <div className="cardtheme__selection__container-content">
          {showCase.map((item) => (
            <div key={item[propertyId]} className="showcase-template">
              <a href="!#" className="showcase-template__item">
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
              </a>
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
