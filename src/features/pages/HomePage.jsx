import React, { useEffect } from "react";
import BannerContent from "components/BannerContent/BannerContent";
import LogoBrand from "components/LogoBrand/LogoBrand";
import FeedBack from "components/FeedBack/FeedBack";
import CardTheme from "components/CardTheme/CardTheme";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getLimitTheme } from "features/Theme/themeSlice";
import { getLimitShowCase } from "features/ShowCase/showCaseSlice";
import { getLimitCardPost } from "features/CardPost/cardPostSlice";
import FeedBackSecond from "components/FeedBack/FeedBackSecond";
import ShowcaseCard from "features/ShowCase/components/ShowCaseCard/ShowCaseCard";
import FeedBackThree from "components/FeedBack/FeedBackThree";
import CardPost from "features/CardPost/components/CardPost/CardPost";
import Creator from "components/Creator/Creator";

HomePage.propTypes = {};

function HomePage(props) {
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
    <>
      <BannerContent />
      <LogoBrand />
      <FeedBack />
      <CardTheme themeList={themeList} />
      <FeedBackSecond />
      <ShowcaseCard showCase={showCase} title="See Aspire Themes in action" />
      <FeedBackThree />
      <CardPost cardPostList={cardPostList} />
      <Creator />
    </>
  );
}

export default HomePage;
