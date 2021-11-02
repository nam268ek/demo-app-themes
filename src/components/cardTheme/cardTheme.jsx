import "./cardTheme.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CardTheme = ({ themesTitle, propertyId, themeList, props }) => {
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
                to={props.location.pathname + "/" + theme.name.toLowerCase()}
                className="theme-content-link"
              >
                <img src={theme.image} alt="" className="theme-img" />
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
