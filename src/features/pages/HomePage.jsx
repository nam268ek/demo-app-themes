import BannerContent from 'components/BannerContent/BannerContent';
import CardTheme from 'components/CardTheme/CardTheme';
import Creator from 'components/Creator/Creator';
import FeedBack from 'components/FeedBack/FeedBack';
import FeedBackSecond from 'components/FeedBack/FeedBackSecond';
import FeedBackThree from 'components/FeedBack/FeedBackThree';
import LogoBrand from 'components/LogoBrand/LogoBrand';
import { getLimitCardPost } from 'features/CardPost/cardPostSlice';
import CardPost from 'features/CardPost/components/CardPost/CardPost';
import ShowcaseCard from 'features/ShowCase/components/ShowCaseCard/ShowCaseCard';
import { getLimitShowCase } from 'features/ShowCase/showCaseSlice';
import { getLimitTheme } from 'features/Theme/themeSlice';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

HomePage.propTypes = {};

function HomePage() {
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
