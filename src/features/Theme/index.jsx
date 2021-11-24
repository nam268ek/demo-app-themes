import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { getAllTheme } from "./themeSlice";

import OnTop from "components/onTop/onTop";
import CardTheme from "components/cardTheme/cardTheme";
import Footer from "components/footer/footer";
import ThemeItem from "components/themeItem/themeItem";

const Themes = () => {
  const dispatch = useDispatch();
  const themeList = useSelector((state) => state.themes.themeList);
  useEffect(() => {
    dispatch(getAllTheme());
  }, [dispatch]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <CardTheme
              themeList={themeList}
              themesTitle="Choose a Ghost theme you love"
            />
            <Footer />
            <OnTop />
          </>
        }
      />
      <Route path=":themeItem" element={<ThemeItem />} />
    </Routes>
  );
};

export default Themes;
