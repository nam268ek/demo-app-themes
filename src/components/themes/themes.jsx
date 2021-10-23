import Footer from "./../footer/footer";
import CardTheme from "./../cardTheme/cardTheme";
import themeApi from "./../../api/themeApi";
import { useState, useEffect } from "react";

const Themes = () => {
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
    <div className="themes">
      <CardTheme
        themeList={themeList}
        themesTitle="Choose a Ghost theme you love"
      />
      <Footer />
    </div>
  );
};

export default Themes;
