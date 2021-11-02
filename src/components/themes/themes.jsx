import { useState, useEffect } from "react";
import { Fragment } from "react";

import themeApi from "./../../api/themeApi";

import Footer from "./../footer/footer";
import CardTheme from "./../cardTheme/cardTheme";
import OnTop from "../onTop/onTop";

const Themes = (props) => {
  const [themeList, setThemeList] = useState([]);

  useEffect(() => {
    //call api get limit theme
    const getAllTheme = async () => {
      const data = await themeApi.getAll();
      setThemeList(data);
    };
    getAllTheme();
  }, []);

  return (
    <Fragment>
      <CardTheme
        themeList={themeList}
        themesTitle="Choose a Ghost theme you love"
        props={props}
      />
      <Footer />
      <OnTop />
    </Fragment>
  );
};

export default Themes;
