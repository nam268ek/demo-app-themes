import { Fragment, useState, useEffect } from "react";
import themeApi from "../../api/themeApi";

import Box from "../box/box";
import OnTop from "../onTop/onTop";
import Footer from "./../footer/footer";

const Documentation = () => {
  const [themeList, setThemeList] = useState([]);

  useEffect(() => {
    const handleListThemes = async () => {
      const data = await themeApi.getAll();
      setThemeList(data);
    };
    handleListThemes();
  }, []);

  return (
    <Fragment>
      <Box themeList={themeList} />
      <Footer />
      <OnTop />
    </Fragment>
  );
};

export default Documentation;
