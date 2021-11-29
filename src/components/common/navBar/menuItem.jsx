import { MenuItem, RouteLink } from "features/Navbar/NavBar.styles";
import { PropTypes } from "prop-types";

const Menu = ({ titleList, classActive, color }) => {
  return (
    <>
      {titleList.map((item, index) => (
        <MenuItem key={index}>
          <RouteLink
            className={({ isActive }) => isActive && classActive}
            to={item.toHref}
            color={color}
          >
            {item.title}
          </RouteLink>
        </MenuItem>
      ))}
    </>
  );
};

Menu.propTypes = {
  titleList: PropTypes.array,
  classActive: PropTypes.string,
  color: PropTypes.string,
};

Menu.defaultProps = {
  titleList: [],
  classActive: "",
  color: "",
};

export default Menu;
