/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Zonartra",
  title: "Hi all, I'm Zonartra",
  subTitle: emoji(
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  // github: "https://github.com/",
  // linkedin: "https://www.linkedin.com/in/",
  gmail: "/",
  // gitlab: "https://gitlab.com/",
  facebook: "https://www.facebook.com/",
  // medium: "https://medium.com/",
  // stackoverflow: "https://stackoverflow.com/",
  instagram: 'https://www.instagram.com/',
  twitter: 'https://twitter.com/',
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "About Us",
  subTitle: "TOVO Is Dynamic, High-Performance And Easy To Use Landing Page Theme. The Theme Is Developed Focusing On The Attractive Designs And Easy Customizable Features.",
  skills: [
    {text:'Develop',img:'http://react.pixelstrap.com/tovo/assets/images/icon1.png'},
    {text:'Progressive',img:'	http://react.pixelstrap.com/tovo/assets/images/icon3.png'},
    {text:'Integration',img:'http://react.pixelstrap.com/tovo/assets/images/icon2.png'},
    {text:'Integration',img:'http://react.pixelstrap.com/tovo/assets/images/icon4.png'}
    
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Zonartra ",
  number: "-------",
  email_address: "contact@zonartra.com"
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  contactInfo,
};
