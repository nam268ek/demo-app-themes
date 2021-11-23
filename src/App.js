import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "components/homePage/homePage";
import NotFound from "components/NotFound/NotFound";
import NavBar from "components/navBar/navBar";
import ShowCase from "features/ShowCase/components/showCase/showCase";
import Documentation from "features/Theme/components/documentation/documentation";
import Blog from "features/CardPost/components/blog/blog";
import Contact from "components/Contact/Contact";
import Cart from "features/Cart/Cart";
import Themes from "features/Theme";
import SignIn from "components/SignIn/SignIn";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="themes/*" element={<Themes />} />
          <Route path="documentations" element={<Documentation />} />
          <Route path="showcase/*" element={<ShowCase />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
          <Route path="signin" element={<SignIn />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
