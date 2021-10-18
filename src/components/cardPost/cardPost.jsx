const CardPost = () => {
  return (
    <div className="cardpost__gird">
      <div className="cardpost__gird-container">
        <div className="cardpost-header">
          <h2 className="cardpost-header__title">Titulo del post</h2>
          <p className="cardpost-header__info">
            <span className="info"></span>
            <a href="" className="info-link"></a>
          </p>
        </div>
        <div className="cardpost-content">
            <div className="cardpost-content__item">
                <a href="" className="content-item-link">
                    <img src="https://dl.airtable.com/.attachments/b6dda63284cd3448999ba314520a732b/4f6669fa/sanitybytanmoy.jpg" alt="" className="content-item-img" />
                    <div className="content-item-text"></div>
                </a>
            </div>
            <div className="cardpost-content__item">
                <a href="" className="content-item-link">
                    <img src="https://d33wubrfki0l68.cloudfront.net/370f46abf21034eb564c7c110bd2c0cfa787b38f/32d58/images/newsletter/6/tiers-feature-image.jpg" alt="" className="content-item-img" />
                    <div className="content-item-text"></div>
                </a>
            </div>
            <div className="cardpost-content__item">
                <a href="" className="content-item-link">
                    <img src="https://dl.airtable.com/.attachments/2e01d0504224516fcd7142c2b1184df3/960fe525/iainbroome.png" alt="" className="content-item-img" />
                    <div className="content-item-text"></div>
                </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CardPost;
