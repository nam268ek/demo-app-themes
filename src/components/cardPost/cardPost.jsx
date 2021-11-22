import LazyLoad from "react-lazyload";
import { useLocation, Link } from "react-router-dom";
import "./cardPost.scss";

const CardPost = ({ props, cardPostList }) => {
  const { pathname } = useLocation();

  const handleDateTime = (date) => {
    const dateTime = new Date(date).toLocaleDateString();
    return dateTime;
  };

  return (
    <div className="cardpost__gird">
      <div className="cardpost__gird-container">
        {pathname === "/" && (
          <div className="cardpost-header">
            <h2 className="cardpost-header__title">Ghost tips & tricks</h2>
            <p className="cardpost-header__info">
              <span className="info">
                Find knowledge and advice to make your Ghost site better.
              </span>
              <Link to="!#" className="info-link">
                Read more posts
              </Link>
            </p>
          </div>
        )}
        <div className="cardpost-content">
          {cardPostList.map((card) => (
            <div key={card.id} className="cardpost-content__item">
              <Link to="!#" className="content-item-link">
                <div className="content-item-img">
                  <LazyLoad offset={-150} classNamePrefix="lazyload">
                    <img
                      src={card.image}
                      alt=""
                      decoding="async"
                      className="content-item-img-source"
                    />
                  </LazyLoad>
                </div>
                <div className="content-item-text">
                  <h3 className="content-item-text__title">{card.title}</h3>
                  <p className="content-item-text__content">{card.body}</p>
                  <time className="content-item-text__time">
                    {handleDateTime(card.datetime)}
                  </time>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardPost;
