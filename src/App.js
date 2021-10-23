import React from "react";
import { Switch, Route } from "react-router-dom";

import Blog from "./components/blog/blog";
import Contact from "./components/contact/contact";
import Documentation from "./components/documentation/documentation";
import HomePage from "./components/homePage/homePage";
import NavBar from "./components/navBar/navBar";
import ShowCase from "./components/showCase/showCase";
import Themes from "./components/themes/themes";

function App() {
  return (
    <React.Fragment>
      <div className="header">
        <NavBar />
      </div>
      <main>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/themes" component={Themes} />
          <Route path="/documentations" component={Documentation} />
          <Route path="/showcase" component={ShowCase} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
