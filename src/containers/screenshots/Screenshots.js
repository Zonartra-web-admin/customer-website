import React from "react";

import "./Screenshots.css";
import "./slick-theme.css";
import "./responsive.css";
import Slider from "react-slick";
const Screenshots = () => {
    var settings = {
        // centerPadding: "60px",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        // className: "center",
        centerMode: true,   
        focusOnSelect: true,
        swipeToSlide: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
    return (

        <section id="screenshot" className="screenshot padding-top-bottom">
            <div class="screenshot-decor">
                <div class="screenshot-circle1">
                    <img src="http://react.pixelstrap.com/tovo/assets/images/feature-circle-two.png" alt="feature-circle-two" />
                </div>
                <div class="screenshot-circle2">
                    <img src="http://react.pixelstrap.com/tovo/assets/images/feature-circle.png" alt="feature-circle" />
                </div>
                <div class="screenshot-circle3">
                    <img src="http://react.pixelstrap.com/tovo/assets/images/main-banner1.png" alt="feature-circle-three" />
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="screenshot-contain">
                        <img class="mobile-light-left" src="http://react.pixelstrap.com/tovo/assets/images/light.png" alt="light"/>
                        <img class="mob-mocup img-fluid" src="http://react.pixelstrap.com/tovo/assets/images/screenshot-mob.png" alt="screenshot-mob"/>
                        <img class="mobile-light-right" src="http://react.pixelstrap.com/tovo/assets/images/light-right.png" alt="light-right"/>
                        <Slider {...settings} className="screenshot-carousel">
                            <div className="screenshot-item" tabIndex="-4" >
                                <img src="http://react.pixelstrap.com/tovo/assets/images/app/1.jpg" alt="app" className="img-fluid" />
                            </div>
                            <div className="screenshot-item" tabIndex="-3" >
                                <img src="http://react.pixelstrap.com/tovo/assets/images/app/2.jpg" alt="app" className="img-fluid" />
                            </div>
                            <div className="screenshot-item" tabIndex="-2" >
                                <img src="http://react.pixelstrap.com/tovo/assets/images/app/3.jpg" alt="app" className="img-fluid" />
                            </div>
                            <div className="screenshot-item" tabIndex="-1" >
                                <img src="http://react.pixelstrap.com/tovo/assets/images/app/4.jpg" alt="app" className="img-fluid" />
                            </div>
                            <div className="screenshot-item" tabIndex="0" >
                                <img src="http://react.pixelstrap.com/tovo/assets/images/app/5.jpg" alt="app" className="img-fluid" />
                            </div>
                            <div className="screenshot-item" tabIndex="1" >
                                <img src="http://react.pixelstrap.com/tovo/assets/images/app/6.jpg" alt="app" className="img-fluid" />
                            </div>
                            <div className="screenshot-item" tabIndex="2" >
                                <img src="http://react.pixelstrap.com/tovo/assets/images/app/7.jpg" alt="app" className="img-fluid" />
                            </div>
                            <div className="screenshot-item" tabIndex="3" >
                                <img src="http://react.pixelstrap.com/tovo/assets/images/app/8.jpg" alt="app" className="img-fluid" />
                            </div>
                            
                        </Slider>
                        </div>

                        {/* <div className="slick-slider screenshot-carousel slick-margin slick-initialized">
                          <div className="slick-list">
                              <div className="slick-track">
                                <div data-index="-5" tabIndex="-1" className="slick-slide slick-cloned" aria-hidden="true">
                                    <div>
                                       
                                        
                                        
                                        
                                    </div>
                                </div>
                              </div>
                          </div>

                      </div> */}
                    </div>
                </div>
            </div>
        </section>



    );
};
export default Screenshots;
