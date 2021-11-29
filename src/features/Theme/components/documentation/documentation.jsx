import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTheme } from "features/Theme/themeSlice";
import Box from "components/Box/Box";

const Documentation = () => {
  const dispatch = useDispatch();
  const { themeList } = useSelector((state) => state.themes);

  useEffect(() => {
    dispatch(getAllTheme());
  }, [dispatch]);

  return (
    <Fragment>
      <Box themeList={themeList} />
    </Fragment>
  );
};

export default Documentation;
