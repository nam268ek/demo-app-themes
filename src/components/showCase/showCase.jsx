import { Fragment, useState, useEffect } from "react";
import ShowcaseCard from "./../showcaseCard/showcaseCard";
import themeApi from "./../../api/themeApi";
import OnTop from "./../onTop/onTop";
import Footer from "./../footer/footer";

const ShowCase = (props) => {
  const [showCase, setShowCase] = useState([]);
  const [themeList, setThemeList] = useState([]);

  useEffect(() => {
    const getShowCase = async () => {
      const data = await themeApi.showCase();
      setShowCase(data);
    };
    const getThemeList = async () => {
      const data = await themeApi.getAll();
      setThemeList(data);
    };
    getThemeList();
    getShowCase();
  }, []);

  return (
    <Fragment>
      <ShowcaseCard
        showCase={showCase}
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
