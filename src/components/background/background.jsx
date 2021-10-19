import "./background.scss";

const Background = () => {
  return (
    <div className="background">
      <div className="background-gird">
        <div className="background-gird-image">
          <img
            src="https://d33wubrfki0l68.cloudfront.net/2cfb99bb83d70b25eec3b6d7019b21d4b8e1403d/35535/images/assets/ahmad-714-510.jpg"
            alt=""
            className="background-image"
          />
        </div>
        <div className="background-content">
          <h3 className="background-title">
            Hi, I’m Ahmad Ajmi, the creator of Aspire Themes.
          </h3>
          <p className="background-description">
            I have been doing Ghost themes since 2016. I created Aspire Themes
            to provide simple, well-designed, and functional Ghost themes.{" "}
            <a href="!#" className="info-link">
              Read the full story
            </a>
            .
            <br />
            <br />
            Feel free to reach out on{" "}
            <a href="!#" className="info-link sosial-link">
              Twitter
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Background;
