import React, { useContext } from "react";
import "./AboutUs.css";
import { illustration, skillsSection } from "../../portfolio";
import { Fade } from "react-reveal";
import codingPerson from "../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function AboutUs() {
  const { isDark } = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="aboutUs">
      <div className="skills-main-div">
        <Fade left duration={1000}>
          <div className="skills-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={codingPerson} />
            ) : (
              <img
                alt="Man Working"
                src={require("../../assets/images/developerActivity.svg")}
              ></img>
            )}
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h1
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
              {skillsSection.title}{" "}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              {skillsSection.subTitle}
            </p>
            {/* <SoftwareSkill /> */}
            <div className="row">
              <ul className="about-style">
                {skillsSection.skills.map((skills, i) => {
                  return (
                    <li className="d-flex col-lg-6 p-10 abt-hover">
                      <div className="icon-hover">
                        <img src={skills.img} alt=""></img>
                      </div>
                      <p
                        key={i}
                        className={
                          isDark ? "dark-mode about-text" : "about-text"
                        }
                      >
                        {skills.text}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
