import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { getAllTheme } from "./themeSlice";

import OnTop from "components/onTop/onTop";
import CardTheme from "components/cardTheme/cardTheme";
import Footer from "components/footer/footer";
import ThemeItem from "components/themeItem/themeItem";
import NotFound from "components/NotFound/NotFound";

const Themes = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { current: href } = useRef(pathname);
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
              urlParent={href}
            />
            <Footer />
            <OnTop />
          </>
        }
      />
      <Route path=":themeItem" element={<ThemeItem urlParent={href} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Themes;
