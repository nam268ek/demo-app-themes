const TestimonialSecond = () => {
  return (
    <div className="testimonial__text">
      <div className="testimonial__text-col">
        <div className="testimonial__text-col-reverse">
          <div className="text-col__left">
            <h1 className="text-col__left-title">
              "I just{" "}
              <span className="background-color-highlight">
                bought the whole theme bundle
              </span>{" "}
              from Ahmad this morning. I am currently redoing my German blog
              using the Nubia theme and{" "}
              <span className="background-color-highlight">love it</span>."
            </h1>
            <a href="!#" className="text-col__left-link">
              Marco Zehe
            </a>
            <p className="text-col__left-text">
              Accessibility Engineer — Mozilla
            </p>
          </div>
          <div className="text-col__right">
            <img
              src="https://d33wubrfki0l68.cloudfront.net/a3ffa63c8155e30ad55ce68a9e1f48de8bc3f988/96502/images/testimonials/marcozehe.jpg"
              alt=""
              className="text-col__right-img-person"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSecond;
