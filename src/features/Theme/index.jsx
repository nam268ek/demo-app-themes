import { Route, Switch, useRouteMatch } from "react-router-dom";
import { useSelector } from "react-redux";

import OnTop from "components/onTop/onTop";
import NotFound from "components/NotFound/NotFound";
import CardTheme from "components/cardTheme/cardTheme";
import Footer from "components/footer/footer";
import ThemeItem from "components/themeItem/themeItem";

const Themes = (props) => {
  const match = useRouteMatch();
  const themeList = useSelector((state) => state.themes.themeList);

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
