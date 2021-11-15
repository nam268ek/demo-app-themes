import { Fragment, useEffect } from "react";
import ShowcaseCard from "../../../../components/showcaseCard/showcaseCard";
import OnTop from "../../../../components/onTop/onTop";
import Footer from "../../../../components/footer/footer";
import { useSelector, useDispatch } from "react-redux";
import { getAllShowCase } from "features/ShowCase/showCaseSlice";
import { getAllTheme } from "features/Theme/themeSlice";

const ShowCase = (props) => {
  const dispatch = useDispatch();
  const { showCaseList } = useSelector((state) => state.showCases);
  const { themeList } = useSelector((state) => state.themes);

  useEffect(() => {
    dispatch(getAllShowCase());
    dispatch(getAllTheme());
  }, [dispatch]);

  return (
    <Fragment>
      <ShowcaseCard
        showCase={showCaseList}
        themeList={themeList}
        title="Showcase"
        props={props}
      />
      <Footer />
      <OnTop />
    </Fragment>
  );
};

export default ShowCase;
