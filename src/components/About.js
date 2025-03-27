import React, { useState } from "react";
import Giphy from "../images/giphy.webp";
import HTML from "../images/html.svg";
import Python from "../images/python.svg";
import Java from "../images/java.svg";
import Csharp from "../images/csharp.png";
import Flutter from "../images/flutter.png";
import Dart from "../images/dart.png";
import MSSQLServer from "../images/sqlserver.svg";
import Oracle from "../images/oracle.svg";
import Laragon from "../images/laragon.png";
import AndroidStudio from "../images/android.png";
import Intellij from "../images/intellij.png";
import Netbean from "../images/netbean.png";
import Firebase from "../images/firebase.png";
import GitHub from "../images/github.svg";
import VSCode from "../images/vscode.svg";
import VisualStudio from "../images/visualstudio.svg";

const quotes = [
  {
    quote: "Birds of the same feather flock together.",
    from: "Buddha",
  },
  {
    quote: "Controlling complexity is the essence of computer programming.",
    from: "Brian Kernighan",
  },

  {
    quote: "We are what we believe we are.",
    from: "C.S. Lewis",
  },
  {
    quote: "Look at usual things with unusual eyes.",
    from: "Vico Magistetti",
  },
];

const skills = [
  {
    name: "HTML & CSS",
    icon: HTML,
  },
 
  {
    name: "Python",
    icon: Python,
  },
  {
    name: "Java",
    icon: Java,
  },
  {
    name: "C#",
    icon: Csharp,
  },
  {
    name: "Flutter",
    icon: Flutter,
  },
  {
    name: "Dart",
    icon: Dart,
  },
  {
    name: "MS SQL Server",
    icon: MSSQLServer,
  },
  {
    name: "Oracle",
    icon: Oracle,
  },
  {
    name: "Laragon",
    icon: Laragon,
  },
  {
    name: "Firebase",
    icon: Firebase,
  },
];

const tools = [
  {
    name: "GitHub",
    icon: GitHub,
  },
  {
    name: "VS Code",
    icon: VSCode,
  },
  {
    name: "Visual Studio",
    icon: VisualStudio,
  },
  {
    name: "Android Studio",
    icon: AndroidStudio,
  },
  {
    name: "Intellij IDEA",
    icon: Intellij,
  },
  {
    name: "Netbean IDE",
    icon: Netbean,
  },
];

const About = () => {
  const [quoteIndex, setQuoteIndex] = useState(
    Math.floor(Math.random() * quotes.length)
  );

  return (
    <div id="about" className="about">
      <h1>About</h1>
      <div className="container">
        <div className="row about_contents">
          <div className="col col-6">
            <p className="about_content">
              I'm a senior student currently pursuing my degree in Information
              Systems at Ho Chi Minh University of Technology - HUTECH.
              <br />
              I'm aiming to become a proficient software developer, leveraging
              modern technologies to build efficient, scalable, and
              user-friendly applications.
              <br /> My educational journey and projects have equipped me with a
              strong foundation in both theoretical knowledge and practical
              skills, preparing me for a career in the tech industry.
            </p>

            <strong className="about_content_quote">
              "{quotes[quoteIndex].quote}"<br />
              <span>{quotes[quoteIndex].from}</span>
            </strong>
          </div>
          <div className="col col-6">
            <img src={Giphy} alt="Animated Images" />
          </div>
        </div>

        <h1 className="mb-0">My Skills</h1>
        <div className="row about_skills">
          {skills.map((skill, index) => (
            <div className="col" key={index}>
              <div className="about_skills_item">
                <img src={skill.icon} alt={skill.name} />

                <p>{skill.name}</p>
              </div>
            </div>
          ))}
        </div>

        <h1 className="mb-0">Tools</h1>
        <div className="row about_skills">
          {tools.map((skill, index) => (
            <div className="col" key={index}>
              <div className="about_skills_item">
                <img src={skill.icon} alt={skill.name} />

                <p>{skill.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
