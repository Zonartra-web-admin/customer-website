import React, { useContext } from "react";
import StyleContext from "../../contexts/StyleContext";
import { Fade } from "react-reveal";
import "./Categories.css";
import Carousel from "react-grid-carousel";

const Categories = () => {
  const { isDark } = useContext(StyleContext);

  return (
    <div className={isDark ? "dark-mode main" : "main"} id="categories">
      <Fade bottom duration={1000} distance="40px">
        <section className="screenshot padding-top-bottom">
          <h2 className="skills-heading my-2">
            Product <span>Categories </span>
          </h2>
          <div className="container">
            <Carousel
              cols={3}
              rows={2}
              gap={7}
              loop
              containerStyle={{ background: "transparent" }}
            >
              {[...Array(7)].map((_, i) => (
                <Carousel.Item className="catalogue-container" key={i}>
                  <div className="catalogue-card">
                    <img
                      src="https://www.pngitem.com/pimgs/m/1-15030_transparent-background-rose-png-hd-png-download.png"
                      alt="product"
                    />
                    <h3 className="catalogue-title title">Travel Bag</h3>
                    <div className="row">
                    {[...Array(4)].map((_, i) => (
                      <div className="col-4 mb-2 pr-0" key={i}>
                      <div className="chip">Clothe</div>
                      </div>
                        ))}
                    </div>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
          {/* </div>
          </div> */}
        </section>
      </Fade>
    </div>
  );
};
export default Categories;
