import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllCardPosts } from "features/CardPost/cardPostSlice";
import CardPost from "components/cardPost/cardPost";
import Footer from "components/footer/footer";
import OnTop from "components/onTop/onTop";
import "./blog.scss";

const Blog = (props) => {
  const dispatch = useDispatch();
  const { cardPostList } = useSelector((state) => state.cardPosts);

  useEffect(() => {
    dispatch(getAllCardPosts());
  }, [dispatch]);

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
