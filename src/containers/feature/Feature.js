import React, { useContext } from "react";
import StyleContext from "../../contexts/StyleContext";
import { Fade } from "react-reveal";

import './Feature.css';
const Feature = () => {
  const { isDark } = useContext(StyleContext);

  return (
    <div className={isDark ? "dark-mode main" : "main"} id="features">
      <Fade bottom duration={1000} distance="40px">
        <section className="feature">
          <div className="container">
            <div className="row d-flex" >
            <div className="col-9">
              <h2 className="skills-heading">
                    Features of <span>Zonartra </span>
                  </h2>
                <div className="row">
                  <div className="col-12 col-md-6">
                    <ul className="feature-style">
                      <li>
                        <div className="feature-icon">
                          <img src="http://react.pixelstrap.com/tovo/assets/images/icon/1.png" alt="User Friendly" />
                        </div>
                        <div className="feature-subtitle ">
                          <h3>User Friendly</h3>
                        </div>
                        <div>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="feature-icon">
                          <img src="http://react.pixelstrap.com/tovo/assets/images/icon/1.png" alt="User Friendly" />
                        </div>
                        <div className="feature-subtitle ">
                          <h3>User Friendly</h3>
                        </div>
                        <div>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="feature-icon">
                          <img src="http://react.pixelstrap.com/tovo/assets/images/icon/1.png" alt="User Friendly" />
                        </div>
                        <div className="feature-subtitle ">
                          <h3>User Friendly</h3>
                        </div>
                        <div>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                          </p>
                        </div>
                      </li>

                    </ul>
                  </div>
                  <div className="col-12 col-md-6 sm-m-top">
                    <ul className="feature-style">
                      <li>
                        <div className="feature-icon">
                          <img src="http://react.pixelstrap.com/tovo/assets/images/icon/1.png" alt="User Friendly" />
                        </div>
                        <div className="feature-subtitle ">
                          <h3>User Friendly</h3>
                        </div>
                        <div>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="feature-icon">
                          <img src="http://react.pixelstrap.com/tovo/assets/images/icon/1.png" alt="User Friendly" />
                        </div>
                        <div className="feature-subtitle ">
                          <h3>User Friendly</h3>
                        </div>
                        <div>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="feature-icon">
                          <img src="http://react.pixelstrap.com/tovo/assets/images/icon/1.png" alt="User Friendly" />
                        </div>
                        <div className="feature-subtitle ">
                          <h3>User Friendly</h3>
                        </div>
                        <div>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                          </p>
                        </div>
                      </li>

                    </ul>
                  </div>
                </div>

              </div>
              <div className="feature-phone col-3">
                <img className="" src="http://react.pixelstrap.com/tovo/assets/images/222.png" alt="feature_phone" />
              </div>
            
            </div>
          </div>
        </section>
      </Fade>
    </div>
  );
};
export default Feature;
