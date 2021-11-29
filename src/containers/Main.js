import React, {Component} from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import AboutUs from "./aboutUs/AboutUs";
import Top from "./topbutton/Top";
import {StyleProvider} from "../contexts/StyleContext";
import "./Main.css";
// import Profile from "./profile/Profile";
import Categories from "./categories/Categories";
import Feature from "./feature/Feature";
import Screenshots from "./screenshots/Screenshots";
import Vendors from "./vendors/Vendors";
import Contact from "./contactUs/ContactUs";
import Footer from "../components/footer/Footer";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDark: false
    };
  }

  componentDidMount() {
    if (localStorage.getItem("isDark") === null) {
      const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
      localStorage.setItem("isDark", darkPref.matches);
    }
    this.setState({isDark: JSON.parse(localStorage.getItem("isDark"))});
  }
  changeTheme = () => {
    this.setState({isDark: !this.state.isDark}, () => {
      localStorage.setItem("isDark", this.state.isDark);
    });
  };

  render() {
    return (
      <div className={this.state.isDark ? "dark-mode" : null}>
        <StyleProvider
          value={{isDark: this.state.isDark, changeTheme: this.changeTheme}}
        >
          <Header />
          <Greeting />
          <AboutUs />
          <Feature/>
          <Screenshots/>
          <Categories/>
          <Vendors/>
          <Contact/>
          <Footer />
          <Top />
        </StyleProvider>
      </div>
    );
  }
}
