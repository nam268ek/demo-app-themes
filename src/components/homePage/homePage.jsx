import React, { useEffect, useState } from "react";

import BannerContent from "./../bannerContent/bannerContent";
import LogoBrand from "./../logoBrand/logoBrand";
import Testimonial from "./../testimonial/testimonial";
import TestimonialSecond from "./../testimonialSecond/testimonialSecond";
import CardTheme from "./../cardTheme/cardTheme";
import ShowcaseCard from "./../showcaseCard/showcaseCard";
import TestimontialThird from "./../testimontialThird/testimontialThird";
import CardPost from "./../cardPost/cardPost";
import Background from "./../background/background";
import Footer from "./../footer/footer";
import OnTop from "../onTop/onTop";

import themeApi from "../../api/themeApi";

const HomePage = () => {
  const [themeList, setThemeList] = useState([]);

  useEffect(() => {
    //call api get limit theme
    const getAllTheme = async () => {
      const params = {
        _start: 0,
        _limit: 4,
      };
      const data = await themeApi.getLimit(params);
      setThemeList(data);
    };
    getAllTheme();
  }, []);

  return (
    <div>
      <BannerContent />
      <LogoBrand />
      <Testimonial />
      <CardTheme themeList={themeList} />
      <TestimonialSecond />
      <ShowcaseCard />
      <TestimontialThird />
      <CardPost />
      <Background />
      <Footer />
      <OnTop />
    </div>
  );
};

export default HomePage;
