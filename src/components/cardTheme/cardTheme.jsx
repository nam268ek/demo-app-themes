import "./cardTheme.scss";

const CardTheme = () => {
  return (
    <div className="cardtheme__selection">
      <div className="cardtheme__selection__container">
        <div className="cardtheme__selection__container-title">
          <h1 className="theme-lastest">Lastest Ghost themes</h1>
        </div>
        <div className="cardtheme__selection__container-content">
          <div className="theme-content">
            <a href="!#" className="theme-content-link">
              <img
                src="https://aspirethemes.com/images/themes/ubud/preview.webp"
                alt=""
                className="theme-img"
              />
              <p className="theme-info">Ubud</p>
            </a>
          </div>
          <div className="theme-content">
            <a href="!#" className="theme-content-link">
              <img
                src="https://aspirethemes.com/images/themes/krabi/preview.webp"
                alt=""
                className="theme-img"
              />
              <p className="theme-info">Krabi</p>
            </a>
          </div>
          <div className="theme-content">
            <a href="!#" className="theme-content-link">
              <img
                src="https://aspirethemes.com/images/themes/penang/preview.webp"
                alt=""
                className="theme-img"
              />
              <p className="theme-info">Penang</p>
            </a>
          </div>
          <div className="theme-content">
            <a href="!#" className="theme-content-link">
              <img
                src="https://aspirethemes.com/images/themes/hue/preview.webp"
                alt=""
                className="theme-img"
              />
              <p className="theme-info">Hue</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTheme;
