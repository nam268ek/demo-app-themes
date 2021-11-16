import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import HomePage from "components/homePage/homePage";
import NotFound from "components/NotFound/NotFound";
import NavBar from "components/navBar/navBar";
import Themes from "features/Theme";
import ShowCase from "features/ShowCase/components/showCase/showCase";
import Documentation from "features/Theme/components/documentation/documentation";
import Blog from "features/CardPost/components/blog/blog";
import Contact from "components/Contact/contact";
import Cart from "features/Cart/Cart";

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
          <Route path="/cart" render={(props) => <Cart {...props} />} />
          <Route path="/notfound" component={NotFound} />
          <Redirect to="notfound" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
