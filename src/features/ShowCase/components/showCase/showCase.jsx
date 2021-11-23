import { Fragment, useEffect } from "react";
import ShowcaseCard from "../../../../components/showcaseCard/showcaseCard";
import OnTop from "../../../../components/onTop/onTop";
import Footer from "../../../../components/footer/footer";
import { useSelector, useDispatch } from "react-redux";
import { getAllShowCase, getDetail } from "features/ShowCase/showCaseSlice";
import { getAllTheme } from "features/Theme/themeSlice";
import { Route, Routes } from "react-router-dom";
import ShowCaseDetail from "../ShowCaseDetail/ShowCaseDetail";
import NotFound from "components/NotFound/NotFound";

const ShowCase = (props) => {
  const dispatch = useDispatch();
  const { showCaseList } = useSelector((state) => state.showCases);
  const { themeList } = useSelector((state) => state.themes);

  useEffect(() => {
    dispatch(getDetail());
    dispatch(getAllShowCase());
    dispatch(getAllTheme());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ShowcaseCard
                showCase={showCaseList}
                themeList={themeList}
                title="Showcase"
                props={props}
              />
              <Footer />
              <OnTop />
            </>
          }
        />
        <Route path=":detail" element={<ShowCaseDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default ShowCase;
