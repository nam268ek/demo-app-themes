import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Blog from "./components/blog/blog";
import Documentation from "./components/documentation/documentation";
import HomePage from "./components/homePage/homePage";
import NotFound from "./components/NotFound/NotFound";
import ShowCase from "./components/showCase/showCase";
import Themes from "./components/themes/themes";
import Contact from "./components/contact/contact";
import NavBar from "./components/navBar/navBar";

function App() {
  return (
    <React.Fragment>
      <div className="header">
        <NavBar />
      </div>
      <main>
        <Switch>
          <Route path="/" exact render={(props) => <HomePage {...props} />} />
          <Route path="/themes" render={(props) => <Themes {...props} />} />
          <Route
            path="/documentations"
            render={(props) => <Documentation {...props} />}
          />
          <Route path="/showcase" render={(props) => <ShowCase {...props} />} />
          <Route path="/blog" render={(props) => <Blog {...props} />} />
          <Route path="/contact" render={(props) => <Contact {...props} />} />
          <Route path="/notfound" component={NotFound} />
          <Redirect to="notfound" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
