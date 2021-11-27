import React from "react";

import "./catalogue.css";
// import "./slick-theme.css";
// import "./responsive.css";
import Slider from "react-slick";
const Catalogue = () => {
  var settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    rows: 2,
    slidesPerRow: 3,
    // centerPadding: "60px",
    // dots: true,
    // infinite: true,
    // speed: 500,
    // slidesToShow: ,
    // // slidesToScroll: 1,
    // // className: "center",
    // centerMode: true,
    // focusOnSelect: true,
    // swipeToSlide: true,
    // slidesPerRow: 2,
    // rows:2,
    // // centerPadding: "60px",
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
    <section id="catalogue" className="screenshot padding-top-bottom">
      <div className="container">
        <div className="row">
          <div className="w-100">
            <Slider {...settings} className="screenshot-carousel">
              <div className="blog-container">
                <div className="blog-card">
                  <img src="https://media.istockphoto.com/photos/yellow-open-backpack-picture-id1141208525?k=20&m=1141208525&s=612x612&w=0&h=cOu7gNKtDi4FuGAzSDvn-Bm9PbB8tvWVgi7xY9lhcRw=" alt="product"/>
                  <h3 className="blog-title">Travel Bag</h3>
                  <p className="small">Price: $1.23</p>
                </div>
              </div>
              <div className="blog-container">
                <div className="blog-card">
                  <img src="https://media.istockphoto.com/photos/yellow-open-backpack-picture-id1141208525?k=20&m=1141208525&s=612x612&w=0&h=cOu7gNKtDi4FuGAzSDvn-Bm9PbB8tvWVgi7xY9lhcRw=" alt="product"/>
                  <h3 className="blog-title">Travel Bag</h3>
                  <p className="small">Price: $1.23</p>
                </div>
              </div>
              <div className="blog-container">
                <div className="blog-card">
                  <img src="https://media.istockphoto.com/photos/yellow-open-backpack-picture-id1141208525?k=20&m=1141208525&s=612x612&w=0&h=cOu7gNKtDi4FuGAzSDvn-Bm9PbB8tvWVgi7xY9lhcRw=" alt="product"/>
                  <h3 className="blog-title">Travel Bag</h3>
                  <p className="small">Price: $1.23</p>
                </div>
              </div>
              <div className="blog-container">
                <div className="blog-card">
                  <img src="https://media.istockphoto.com/photos/yellow-open-backpack-picture-id1141208525?k=20&m=1141208525&s=612x612&w=0&h=cOu7gNKtDi4FuGAzSDvn-Bm9PbB8tvWVgi7xY9lhcRw=" alt="product"/>
                  <h3 className="blog-title">Travel Bag</h3>
                  <p className="small">Price: $1.23</p>
                </div>
              </div>
              <div className="blog-container">
                <div className="blog-card">
                  <img src="https://media.istockphoto.com/photos/yellow-open-backpack-picture-id1141208525?k=20&m=1141208525&s=612x612&w=0&h=cOu7gNKtDi4FuGAzSDvn-Bm9PbB8tvWVgi7xY9lhcRw="alt="product"/>
                  <h3 className="blog-title">Travel Bag</h3>
                  <p className="small">Price: $1.23</p>
                </div>
              </div>
              <div className="blog-container">
                <div className="blog-card">
                  <img src="https://media.istockphoto.com/photos/yellow-open-backpack-picture-id1141208525?k=20&m=1141208525&s=612x612&w=0&h=cOu7gNKtDi4FuGAzSDvn-Bm9PbB8tvWVgi7xY9lhcRw=" alt="product"/>
                  <h3 className="blog-title">Travel Bag</h3>
                  <p className="small">Price: $1.23</p>
                </div>
              </div>
              
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Catalogue;
