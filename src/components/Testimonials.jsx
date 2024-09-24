import React from "react";

const Testimonials = () => {
  return (
    <div className="pt-5">
      <h2>Customer Testimonials</h2>
      <a href="https://www.facebook.com/TysGinseng/reviews" target="_blank">
        Leave us review on Facebook
      </a>
      <p>These are testimonials from real customers</p>
      <div className="py-3">
        <h4 className="testimonial-title">
          My energy levels are through the roof...{" "}
        </h4>
        <p className="testtimonial-review fst-italic fw-light">
          "I've been using this ginseng product for the past three months, and
          the results have been amazing. My energy levels are through the roof,
          and I feel more focused throughout the day. It's become an essential
          part of my daily routine."{" "}
          <span className="ms-3 testimonial-name fst-italic fs-6">
            -Tim H (Minnesota)
          </span>
        </p>
      </div>
      <div className="py-3">
        <h4 className="testimonial-title">
          It has made a noticeable difference in my overall well-being...{" "}
        </h4>
        <p className="testtimonial-review fst-italic fw-light">
          "I was skeptical at first, but after trying this premium ginseng, I
          can truly say it has made a noticeable difference in my overall
          well-being. My stress levels have dropped, and I feel more balanced
          both physically and mentally."
          <span className="ms-3 testimonial-name fst-italic fs-6">
            -Sarah M. (California)
          </span>
        </p>
      </div>

      <div className="py-3">
        <h4 className="testimonial-name">
          Sarah M.
          <span className="ms-3 testimonial-location fst-italic fw-light">
            -California
          </span>
        </h4>
        <p className="testtimonial-review fst-italic fw-light">
          "I was skeptical at first, but after trying this premium ginseng, I
          can truly say it has made a noticeable difference in my overall
          well-being. My stress levels have dropped, and I feel more balanced
          both physically and mentally."
        </p>
      </div>

      <div className="pb-5 pt-3">
        <h4 className="testimonial-name">
          David L<span className="testimonial-location ms-4">-Texas</span>
        </h4>
        <p className="testtimonial-review fst-italic fw-light mb-0">
          "This ginseng is the real deal! I've tried several other brands
          before, but none compare to the quality and potency of this one. It
          gives me the stamina I need to get through my workouts and busy
          workdays."
        </p>
      </div>
    </div>
  );
};

export default Testimonials;
