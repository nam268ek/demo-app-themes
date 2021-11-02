import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import themeApi from "./api/themeApi";

import Blog from "./components/blog/blog";
import Contact from "./components/contact/contact";
import Documentation from "./components/documentation/documentation";
import HomePage from "./components/homePage/homePage";
import NavBar from "./components/navBar/navBar";
import ShowCase from "./components/showCase/showCase";
import ThemeItem from "./components/themeItem/themeItem";
import Themes from "./components/themes/themes";

function App() {
  return (
    <React.Fragment>
      <div className="header">
        <NavBar />
      </div>
      <main>
        <Switch>
          <Route path="/" exact render={(props) => <HomePage {...props} />} />
          <Route
            path="/themes/:name"
            render={(props) => <ThemeItem {...props} />}
          />
          <Route path="/themes" render={(props) => <Themes {...props} />} />
          <Route
            path="/documentations"
            render={(props) => <Documentation {...props} />}
          />
          <Route path="/showcase" render={(props) => <ShowCase {...props} />} />
          <Route path="/blog" render={(props) => <Blog {...props} />} />
          <Route path="/contact" render={(props) => <Contact {...props} />} />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
