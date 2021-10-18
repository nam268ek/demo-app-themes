import "./showcaseCard.scss";

const ShowcaseCard = () => {
  return (
    <div className="cardtheme__selection">
      <div className="cardtheme__selection__container">
        <div className="cardtheme__selection__container-title">
          <h1 className="theme-lastest mb-0">Lastest Ghost themes</h1>
        </div>
        <div className="showcase__text-secondary p-lr-14">
          <p className="text-secondary">
            Themes truly come alive when used by real websites. Prepare to get
            inspired!
          </p>
          <a href="!#" className="text-secondary-link">
            Explore more examples
          </a>
        </div>
        <div className="cardtheme__selection__container-content">
          <div className="showcase-template">
            <a href="!#" className="showcase-template__item">
              <img
                src="https://dl.airtable.com/.attachments/bf8d028ac55af3905b4a173198b05aab/7d43ebfd/americanpurpose.png"
                alt=""
                className="template-item"
              />
            </a>
          </div>
          <div className="showcase-template">
            <a href="!#" className="showcase-template__item">
              <img src="https://dl.airtable.com/.attachments/66248dd7305d6b9961be4a8b516aafd8/9885b649/thegradient.png" alt="" className="template-item" />
            </a>
          </div>
          <div className="showcase-template">
            <a href="!#" className="showcase-template__item">
              <img src="https://dl.airtable.com/.attachments/a36221803d6869b04bd993d7c9931bc7/20c63602/quillette.jpg" alt="" className="template-item" />
            </a>
          </div>
          <div className="showcase-template">
            <a href="!#" className="showcase-template__item">
              <img src="https://dl.airtable.com/.attachments/1e8bf71afa0d5df2c51703e101e26530/e212e593/guideline.jpg" alt="" className="template-item" />
            </a>
          </div>
          <div className="showcase-template">
            <a href="!#" className="showcase-template__item">
              <img src="https://dl.airtable.com/.attachments/00073e701b063ce81d287f73ef8e80f6/bf4dc622/marcuswermuth.png" alt="" className="template-item" />
            </a>
          </div>
          <div className="showcase-template">
            <a href="!#" className="showcase-template__item">
              <img src="https://dl.airtable.com/.attachments/9e2675109a599c4dad6b07859d1eefab/8c57d567/harvard.png" alt="" className="template-item" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseCard;
