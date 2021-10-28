import { PropTypes } from "prop-types";
import "./showcaseCard.scss";

const ShowcaseCard = ({
  propertyId,
  showCase,
  propertyName,
  themeList,
  title,
  props,
}) => {
  const url = props.location.pathname;
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
                <img src={item.image} alt="" className="template-item" />
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
