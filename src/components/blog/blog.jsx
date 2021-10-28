import { Fragment, useState, useEffect } from "react";
import Footer from "./../footer/footer";
import CardPost from "./../cardPost/cardPost";
import themeApi from "../../api/themeApi";
import OnTop from "../onTop/onTop";
import "./blog.scss";

const Blog = (props) => {
  const [cardPostList, setCardPostList] = useState([]);

  useEffect(() => {
    const getCardPostList = async () => {
      const data = await themeApi.getCardPostList();
      setCardPostList(data);
    };
    getCardPostList();
  });
  return (
    <Fragment>
      <div className="gird-layout">
        <div className="gird-layout__container">
          <div className="gird-layout__container-content">
            <div className="content-col-1">
              <h1>
                Blog <span> &minus; </span> <a href="!#">RSS Feed</a>
              </h1>
              <p>Subscribe to receive Ghost resources and new updates.</p>
            </div>
            <div className="content-col-2">
              <form action="">
                <input
                  className="form-subs__input br-rt-rb-0 b-r-0"
                  type="text"
                  placeholder="Email Address"
                />
                <a href="!#" className="form-subs__btn">
                  Subscribe
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
      <CardPost cardPostList={cardPostList} props={props} />
      <Footer />
      <OnTop />
    </Fragment>
  );
};

export default Blog;
