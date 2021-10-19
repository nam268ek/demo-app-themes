import React from "react";
import ReactDOM from "react-dom";

import NavBar from "./components/navBar/navBar";
import BannerContent from "./components/bannerContent/bannerContent";
import LogoBrand from "./components/logoBrand/logoBrand";
import Testimonial from "./components/testimonial/testimonial";
import TestimonialSecond from "./components/testimonialSecond/testimonialSecond";
import CardTheme from "./components/cardTheme/cardTheme";
import ShowcaseCard from "./components/showcaseCard/showcaseCard";
import TestimontialThird from "./components/testimontialThird/testimontialThird";
import CardPost from "./components/cardPost/cardPost";
import Background from "./components/background/background";

import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.scss";

ReactDOM.render(
  <React.Fragment>
    <div className="header">
      <NavBar />
    </div>
    <main className="wrapper">
      <BannerContent />
      <LogoBrand />
      <Testimonial />
      <CardTheme />
      <TestimonialSecond />
      <ShowcaseCard />
      <TestimontialThird />
      <CardPost />
      <Background />
    </main>
  </React.Fragment>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
