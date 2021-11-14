import React, { useEffect } from "react";

import BannerContent from "components/bannerContent/bannerContent";
import LogoBrand from "components/logoBrand/logoBrand";
import Testimonial from "components/testimonial/testimonial";
import TestimonialSecond from "components/testimonialSecond/testimonialSecond";
import CardTheme from "components/cardTheme/cardTheme";
import ShowcaseCard from "components/showcaseCard/showcaseCard";
import TestimontialThird from "components/testimontialThird/testimontialThird";
import CardPost from "components/cardPost/cardPost";
import Background from "components/background/background";
import Footer from "components/footer/footer";
import OnTop from "components/onTop/onTop";
import { useDispatch, useSelector } from "react-redux";
import { getLimitTheme } from "features/Theme/themeSlice";
import { getLimitShowCase } from "features/ShowCase/showCaseSlice";
import { getLimitCardPost } from "features/CardPost/cardPostSlice";

const HomePage = (props) => {
  const dispatch = useDispatch();
  const themeList = useSelector((state) => state.themes.themeList);
  const showCase = useSelector((state) => state.showCases.showCaseList);
  const cardPostList = useSelector((state) => state.cardPosts.cardPostList);

  useEffect(() => {
    dispatch(getLimitTheme({ _start: 0, _limit: 4 }));
    dispatch(getLimitShowCase({ _start: 0, _limit: 6 }));
    dispatch(getLimitCardPost({ _start: 0, _limit: 3 }));
  }, [dispatch]);

  return (
    <div>
      <BannerContent />
      <LogoBrand />
      <Testimonial />
      <CardTheme themeList={themeList} props={props} />
      <TestimonialSecond />
      <ShowcaseCard
        showCase={showCase}
        title="See Aspire Themes in action"
        props={props}
      />
      <TestimontialThird />
      <CardPost cardPostList={cardPostList} props={props} />
      <Background />
      <Footer />
      <OnTop />
    </div>
  );
};

export default HomePage;
