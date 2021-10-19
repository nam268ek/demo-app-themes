import "./cardPost.scss";

const CardPost = () => {
  return (
    <div className="cardpost__gird">
      <div className="cardpost__gird-container">
        <div className="cardpost-header">
          <h2 className="cardpost-header__title">Ghost tips & tricks</h2>
          <p className="cardpost-header__info">
            <span className="info">
              Find knowledge and advice to make your Ghost site better.
            </span>
            <a href="!#" className="info-link">
              Read more posts
            </a>
          </p>
        </div>
        <div className="cardpost-content">
          <div className="cardpost-content__item">
            <a href="!#" className="content-item-link">
              <img
                src="https://dl.airtable.com/.attachments/b6dda63284cd3448999ba314520a732b/4f6669fa/sanitybytanmoy.jpg"
                alt=""
                className="content-item-img"
              />
              <div className="content-item-text">
                <h3 className="content-item-text__title">
                  Ghost Websites Inspiration — 38
                </h3>
                <p className="content-item-text__content">
                  The issue number 38 of inspiring websites created with the
                  Ghost CMS.
                </p>
                <time className="content-item-text__time">
                  — 10 October 2021
                </time>
              </div>
            </a>
          </div>
          <div className="cardpost-content__item">
            <a href="!#" className="content-item-link">
              <img
                src="https://d33wubrfki0l68.cloudfront.net/370f46abf21034eb564c7c110bd2c0cfa787b38f/32d58/images/newsletter/6/tiers-feature-image.jpg"
                alt=""
                className="content-item-img"
              />
              <div className="content-item-text">
                <h3 className="content-item-text__title">
                  Ghost Newsletter ‘#6’ — Membership Tiers, Call to Action Card,
                  Featured Image Caption
                </h3>
                <p className="content-item-text__content">
                  I’m sharing the recent Ghost new features in this issue,
                  including the Membership Tiers, the call to action card,
                  featured image caption, and the WebP image format support.
                  Also, I will share some Ghost website inspiration and other
                  Ghost resources.
                </p>
                <time className="content-item-text__time">
                  — 01 October 2021
                </time>
              </div>
            </a>
          </div>
          <div className="cardpost-content__item">
            <a href="!#" className="content-item-link">
              <img
                src="https://dl.airtable.com/.attachments/2e01d0504224516fcd7142c2b1184df3/960fe525/iainbroome.png"
                alt=""
                className="content-item-img"
              />
              <div className="content-item-text">
                <h3 className="content-item-text__title">
                  Ghost Websites Inspiration — 37
                </h3>
                <p className="content-item-text__content">
                  The issue number 37 of inspiring websites created with the
                  Ghost CMS.
                </p>
                <time className="content-item-text__time">
                  — 10 September 2021
                </time>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPost;
