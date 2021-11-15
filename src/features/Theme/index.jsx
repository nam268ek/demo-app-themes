import { Route, Switch, useRouteMatch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import OnTop from "components/onTop/onTop";
import NotFound from "components/NotFound/NotFound";
import CardTheme from "components/cardTheme/cardTheme";
import Footer from "components/footer/footer";
import ThemeItem from "components/themeItem/themeItem";
import { useEffect } from "react";
import { getAllTheme } from "./themeSlice";

const Themes = (props) => {
  const match = useRouteMatch();
  const dispatch = useDispatch();
  const themeList = useSelector((state) => state.themes.themeList);

  useEffect(() => {
    dispatch(getAllTheme());
  }, [dispatch]);

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
