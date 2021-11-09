import { useState, useEffect } from "react";

import themeApi from "./../../api/themeApi";

import Footer from "./../footer/footer";
import CardTheme from "./../cardTheme/cardTheme";
import OnTop from "../onTop/onTop";
import { Switch, useRouteMatch } from "react-router-dom";
import { Route } from "react-router-dom";
import ThemeItem from "./../themeItem/themeItem";
import NotFound from "./../NotFound/NotFound";

const Themes = (props) => {
  const [themeList, setThemeList] = useState([]);
  const match = useRouteMatch();
  console.log(match);
  useEffect(() => {
    //call api get limit theme
    const getAllTheme = async () => {
      const data = await themeApi.getAll();
      setThemeList(data);
    };
    getAllTheme();
  }, []);

  return (
    <Switch>
      <Route
        exact
        path={`${match.url}`}
        render={() => (
          <>
            <CardTheme
              themeList={themeList}
              themesTitle="Choose a Ghost theme you love"
              props={props}
              href={match.url}
            />
            <Footer />
            <OnTop />
          </>
        )}
      />
      <Route
        path={`${match.url}/:nameTheme`}
        render={(props) => <ThemeItem href={match.url} {...props} />}
      />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Themes;
