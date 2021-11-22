import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";
import "./cardTheme.scss";

const CardTheme = ({ themesTitle, propertyId, themeList }) => {
  return (
    <div className="cardtheme__selection">
      <div className="cardtheme__selection__container">
        <div className="cardtheme__selection__container-title">
          <h1 className="theme-lastest">{themesTitle}</h1>
        </div>
        <div className="cardtheme__selection__container-content">
          {themeList.map((theme) => (
            <div className="theme-content" key={theme[propertyId]}>
              <Link
                to={`/themes/${theme.name.toLowerCase()}`}
                className="theme-content-link"
              >
                <LazyLoad offset={-150} classNamePrefix="lazyload">
                  <img
                    src={theme.image}
                    alt=""
                    className="theme-img"
                    width="504"
                    height="284"
                    loading="lazy"
                    decoding="async"
                  />
                </LazyLoad>
                <p className="theme-info">{theme.name}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

CardTheme.propTypes = {
  themesTitle: PropTypes.string,
  propertyId: PropTypes.string,
  themeList: PropTypes.array,
};

CardTheme.defaultProps = {
  themesTitle: "Lastest Ghost themes",
  propertyId: "id",
  themeList: [],
};
export default CardTheme;
