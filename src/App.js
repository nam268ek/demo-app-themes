import FooterContent from "components/FooterContent/FooterContent";
import NotFound from "components/NotFound/NotFound";
import OnTop from "components/OnTop/OnTop";
import Blog from "features/CardPost/components/blog/blog";
import Cart from "features/Cart/Cart";
import Login from "features/Login/Login";
import Contact from "features/pages/Contact/Contact";
import HomePage from "features/pages/HomePage";
import ShowCase from "features/ShowCase/components/showCase/showCase";
import Register from "features/Register/Register";
import Themes from "features/Theme";
import Documentation from "features/Theme/components/documentation/documentation";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Canvas, Main, Footer } from "./App.styles";
import NavBar from "./features/Navbar/NavBar";
import Global from "./globalStyles";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClickOpen = () => {
    window.innerWidth < 1024 && setIsOpen(!isOpen);
  };

  return (
    <>
      <Global />
      <Canvas statusOpen={isOpen}>
        <NavBar handleClickOpen={handleClickOpen} />
        <Main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="themes/*" element={<Themes />} />
            <Route path="documentations" element={<Documentation />} />
            <Route path="showcase/*" element={<ShowCase />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
            <Route path="cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </Main>
        <Footer>
          <FooterContent />
          <OnTop />
        </Footer>
      </Canvas>
    </>
  );
}

export default App;
