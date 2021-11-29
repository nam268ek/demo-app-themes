import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { getAllTheme } from "./themeSlice";
import CardTheme from "components/CardTheme/CardTheme";
import ThemeItem from "components/ThemeItem/ThemeItem";

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
          </>
        }
      />
      <Route path=":themeItem" element={<ThemeItem />} />
    </Routes>
  );
};

export default Themes;
