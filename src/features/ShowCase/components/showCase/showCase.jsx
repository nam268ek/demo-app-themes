import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllShowCase, getDetail } from 'features/ShowCase/showCaseSlice';
import { getAllTheme } from 'features/Theme/themeSlice';
import { Route, Routes } from 'react-router-dom';
import ShowCaseDetail from '../ShowCaseDetail/ShowCaseDetail';
import ShowcaseCard from '../ShowCaseCard/ShowCaseCard';

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
            </>
          }
        />
        <Route path=":detail" element={<ShowCaseDetail />} />
      </Routes>
    </>
  );
};

export default ShowCase;
