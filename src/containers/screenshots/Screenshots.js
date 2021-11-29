import React, { useContext } from "react";

import "./Screenshots.css";
import "./slick-theme.css";
// import "./slick.css";
import "./responsive.css";
import Slider from "react-slick";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

const Screenshots = () => {
  const { isDark } = useContext(StyleContext);

  var settings = {
    arrows: false,
    accessibility: false,
    infinite: true,
    dots: false,
    margin: 30,
    speed: 300,
    autoplaySpeed: 8000,
    slidesToShow: 5,
    slidesToScroll: 1,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "110px",
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "0",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "132px",
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "132px",
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          //   centerMode: true,
          centerPadding: "50px",
          //   variableWidth:true
        },
      },
    ],
  };
  return (
    <div className={isDark ? "dark-mode" : ""} id="screenshot">
      <Fade bottom duration={1000} distance="40px">
        <section className="screenshot padding-top-bottom">
          <div className="screenshot-decor">
            <div className="screenshot-circle1">
              <img
                src="http://react.pixelstrap.com/tovo/assets/images/feature-circle-two.png"
                alt="feature-circle-two"
              />
            </div>
            <div className="screenshot-circle2">
              <img
                src="http://react.pixelstrap.com/tovo/assets/images/feature-circle.png"
                alt="feature-circle"
              />
            </div>
            <div className="screenshot-circle3">
              <img
                src="http://react.pixelstrap.com/tovo/assets/images/main-banner1.png"
                alt="feature-circle-three"
              />
            </div>
          </div>
          <div className="container">
            <h2 className="skills-heading my-2">
              <span>Screenshots </span>
            </h2>
            <div className="row">
              <div className="col-sm-12">
                <div className="screenshot-contain">
                  <img
                    className="mobile-light-left"
                    src="http://react.pixelstrap.com/tovo/assets/images/light.png"
                    alt="light"
                  />
                  <img
                    className="mob-mocup img-fluid"
                    src="http://react.pixelstrap.com/tovo/assets/images/screenshot-mob.png"
                    alt="screenshot-mob"
                  />
                  <img
                    className="mobile-light-right"
                    src="http://react.pixelstrap.com/tovo/assets/images/light-right.png"
                    alt="light-right"
                  />
                  <Slider
                    {...settings}
                    className="screenshot-carousel slick-margin"
                  >
                    <div className="screenshot-item">
                      <img
                        src="http://react.pixelstrap.com/tovo/assets/images/app/1.jpg"
                        alt="app"
                        className="img-fluid"
                      />
                    </div>
                    <div className="screenshot-item">
                      <img
                        src="http://react.pixelstrap.com/tovo/assets/images/app/2.jpg"
                        alt="app"
                        className="img-fluid"
                      />
                    </div>
                    <div className="screenshot-item">
                      <img
                        src="http://react.pixelstrap.com/tovo/assets/images/app/3.jpg"
                        alt="app"
                        className="img-fluid"
                      />
                    </div>
                    <div className="screenshot-item">
                      <img
                        src="http://react.pixelstrap.com/tovo/assets/images/app/4.jpg"
                        alt="app"
                        className="img-fluid"
                      />
                    </div>
                    <div className="screenshot-item">
                      <img
                        src="http://react.pixelstrap.com/tovo/assets/images/app/5.jpg"
                        alt="app"
                        className="img-fluid"
                      />
                    </div>
                    <div className="screenshot-item">
                      <img
                        src="http://react.pixelstrap.com/tovo/assets/images/app/6.jpg"
                        alt="app"
                        className="img-fluid"
                      />
                    </div>
                    <div className="screenshot-item">
                      <img
                        src="http://react.pixelstrap.com/tovo/assets/images/app/7.jpg"
                        alt="app"
                        className="img-fluid"
                      />
                    </div>
                    <div className="screenshot-item">
                      <img
                        src="http://react.pixelstrap.com/tovo/assets/images/app/8.jpg"
                        alt="app"
                        className="img-fluid"
                      />
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fade>
    </div>
  );
};
export default Screenshots;
