import Box from 'components/Box/Box';
import { getAllTheme } from 'features/Theme/themeSlice';
import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
