import "./cardTheme.scss";
import PropTypes from "prop-types";

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
              <a href="!#" className="theme-content-link">
                <img src={theme.image} alt="" className="theme-img" />
                <p className="theme-info">{theme.name}</p>
              </a>
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
