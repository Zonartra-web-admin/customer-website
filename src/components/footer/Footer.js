import React, { useContext } from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
// import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";
import SocialMedia from "../socialMedia/SocialMedia";

export default function Footer() {
  const { isDark } = useContext(StyleContext);
  return (
    <div className={isDark ? "dark-mode" : ""} id="footer">
      <Fade bottom duration={1000} distance="5px">
          <div className="bottom-section">
            <div className="row">
              <div className="col-md-6 p-0 col-12 col-sm-12">
                <div className="address-bar">
                  <div>
                    <ul className="footer-style">
                      <li>
                        <div className="footer-icon">
                          <img src="http://react.pixelstrap.com/tovo/assets/images/locate.png" alt="locate" />
                        </div>
                        <div className="footer-address">
                          <div>
                            B-17 ABC Center, Near Temple, USA 123456
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="footer-icon">
                          <img src="	http://react.pixelstrap.com/tovo/assets/images/telephone.png" alt="telephone" />
                        </div>
                        <div className="footer-address">
                          <div>122-456-7890 / 124-789-5690</div>
                        </div>
                      </li>
                      <li>
                        <div className="footer-icon">
                          <img src="http://react.pixelstrap.com/tovo/assets/images/fotter-email.png" alt="fotter-email" />
                        </div>
                        <div className="footer-address">
                          <div>support@compnay.com</div>
                        </div>
                      </li>
                      <li>
                        <div className="footer-icon">
                          <img src="	http://react.pixelstrap.com/tovo/assets/images/fax.png" alt="" />
                        </div>
                        <div className="footer-address">
                          <div>123-456 / 456-789</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 p-0 col-sm-12 col-sm-12">
                <iframe
                  title="google-map"
                  src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d35391.48685150366!2d72.77537852898678!3d21.18930639680146!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1530610361925"
                  allowFullScreen
                  className="md-height"
                ></iframe>
              </div>
            </div>
            <div className="copyright-section index-footer row">
            <div className="col-6">
              <p>2018-19 copyright by themeforest powered by pixel strap</p>
              </div>
              <div className="col-6 socialmedia">
              <SocialMedia />
              </div>
             
            </div>
        </div>
      </Fade>
    </div>
  );
}
