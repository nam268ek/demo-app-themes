import "./testimonial.scss";

const Testimonial = () => {
  return (
    <div className="testimonial__text">
      <div className="testimonial__text-col">
        <div className="testimonial__text-col-reverse">
        <div className="text-col__left">
          <h1 className="text-col__left-title">
            "If you happen to be looking for Ghost CMS themes, check out
            @aspirethemes I use one of their themes for Glimmering and{" "}
            <span className="background-color-highlight">
              love their work. Excellent design, code, and support."
            </span>
          </h1>
          <a
            href="!#"
            className="text-col__left-link"
          >Leslie Camacho</a>
          <p className="text-col__left-text">Co-Founder — Glimmering LLC</p>
        </div>
        <div className="text-col__right">
          <img
            src="https://d33wubrfki0l68.cloudfront.net/fb3f19d7cc6af774f792398be54409b9ddc4a138/cbb9d/images/testimonials/lesliecamacho.jpg"
            alt=""
            className="text-col__right-img-person"
          />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
