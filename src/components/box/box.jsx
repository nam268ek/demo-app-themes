import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./box.scss";

const Box = (props) => {
  return (
    <div>
      <div className="box">
        <div className="box-header">
          <h1 className="box-header__title">Documentations</h1>
        </div>
        <div className="box-body">
          <div className="box-body__container">
            {props.themeList.map((item) => (
              <div key={item.id} className="box-body__container__card">
                <h2 className="card-item">
                  <Link to="" className="card-item-link">
                    {item.name}
                    <sup className="card-item-version">({item.version})</sup>
                  </Link>
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

Box.propTypes = {
  name: PropTypes.string,
  version: PropTypes.string,
};

export default Box;
