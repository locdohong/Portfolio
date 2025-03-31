import React, { useState, useEffect, useRef } from "react";
import Avatar from "../images/avatar1.png";

const Introduction = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const ref = useRef(null);

  const words = [ 
    "Intern Developer.",
  ];

  const contacts = [
    {
      name: "GitHub",
      icon: "fa-brands fa-github",
      link: "https://github.com/locdohong",
    },
    {
      name: "Facebook",
      icon: "fa-brands fa-facebook-f",
      link: "https://www.facebook.com/kido.loc.2808/",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((preIndex) => (preIndex + 1) % words.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="intro container" id="home">
      <div className="row">
        <div className="intro_content col col-7">
          <div className="intro_content_content">
            <span>Welcome to my portfolio</span>
            <h1>
              Hi, I'm <span> Do Hong Loc</span>
              <br />
              <span
                className="intro_content_headline"
                style={{
                  width: `${(words[wordIndex].length + 1) * 0.5 + 0.2}em`,
                }}
              >
                <span>an</span>
                <span
                  ref={ref}
                  className="intro_content_headline_words_wrapper"
                >
                  {words.map((word, index) => (
                    <b
                      key={index}
                      className={`${
                        index === wordIndex ? "visible" : "hidden"
                      }`}
                    >
                      {word}
                    </b>
                  ))}
                  <span className="cursor"></span>
                </span>
              </span>
            </h1>
            <p>
              Passionate Software Developer with expertise in front-end and
              back-end development using Java, Flutter, C#,
               and SQL. Demonstrated ability to contribute to
              cutting-edge projects and deliver impactful results.
            </p>
          </div>
          <div className="intro_content_contact">
            <p>Find with me</p>
            <ul>
              {contacts.map((contact, index) => (
                <li key={index}>
                  <a href={contact.link} target="_blank" rel="noreferrer">
                    <i className={`fab ${contact.icon}`}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="intro_avt col col-5">
          <div className="intro_avt_thumbnail">
            <img src={Avatar} alt="avatar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
