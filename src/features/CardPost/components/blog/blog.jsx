import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import * as yup from "yup";

import { getAllCardPosts } from "features/CardPost/cardPostSlice";
import CardPost from "components/cardPost/cardPost";
import Footer from "components/footer/footer";
import OnTop from "components/onTop/onTop";
import "./blog.scss";

const Blog = (props) => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const { cardPostList } = useSelector((state) => state.cardPosts);

  useEffect(() => {
    dispatch(getAllCardPosts());
  }, [dispatch]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const schema = yup.object().shape({
      email: yup.string().email(),
    });
    //validate email
    schema.isValid({ email: e.target[0].value }).then((value) => {
      toast.configure({
        theme: "colored",
        autoClose: 3000,
      });

      if (value) {
        toast.success("Thank you for subscribing!");
        setEmail("");
      } else {
        toast.error("Please enter a valid email address");
      }
    });
  };

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
              <form onSubmit={handleOnSubmit}>
                <input
                  className="form-subs__input br-rt-rb-0 b-r-0"
                  type="text"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" className="form-subs__btn">
                  Subscribe
                </button>
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
