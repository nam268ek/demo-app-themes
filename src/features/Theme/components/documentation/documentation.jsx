import { Fragment, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getAllTheme } from "features/Theme/themeSlice";
import Box from "components/box/box";
import Footer from "components/footer/footer";
import OnTop from "components/onTop/onTop";

const Documentation = () => {
  const dispatch = useDispatch();
  const { themeList } = useSelector((state) => state.themes);

  useEffect(() => {
    dispatch(getAllTheme());
  }, [dispatch]);

  return (
    <Fragment>
      <Box themeList={themeList} />
      <Footer />
      <OnTop />
    </Fragment>
  );
};

export default Documentation;
