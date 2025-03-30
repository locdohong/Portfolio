import React, { useState, useRef, useContext } from "react";
import emailjs from "@emailjs/browser";
import Earth from "../images/earth1.webp";
import { AppContext } from "../App";

const Contact = () => {
  const [email, setEmail] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });
  const ref = useRef(null);
  const { setAlert } = useContext(AppContext);

  const handleChange = (e) => {
    setEmail({ ...email, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await emailjs
      .send("service_tla0mgh", "template_5nlqbcb", {
        user_name: email.user_name,
        user_email: email.user_email,
        subject: email.subject,
        message: email.message,
        to_email: "locdohong@gmail.com", 
      }, "pEYSKO0-kCKgGxGfI")
      .then(
        () => {
          setEmail({
            user_name: "",
            user_email: "",
            subject: "",
            message: "",
          });
          setAlert({
            title: "Send Email Success",
            data: "Your message has been sent successfully. Thank you for your contact!",
            type: "success",
          });
        },
        (error) => {
          setAlert({
            title: "Send Email Error",
            data: error.text,
            type: "error",
          });
        }
      );
  };
  

  return (
    <div id="contact" className="contact">
      <h1>Contact With Me</h1>
      <div className="container">
        <div className="row">
          <div className="col contact_left">
            <img src={Earth} alt="earth" />
          </div>
          <div className="col contact_right">
            <form ref={ref} onSubmit={handleSubmit}>
              <div className="contact_form_input">
                <label htmlFor="user_name">Your name</label>
                <input
                  type="text"
                  name="user_name"
                  id="user_name"
                  required
                  value={email.user_name}
                  onChange={handleChange}
                />
              </div>

              <div className="contact_form_input">
                <label htmlFor="user_email">Email</label>
                <input
                  type="email"
                  name="user_email"
                  id="user_email"
                  required
                  value={email.user_email}
                  onChange={handleChange}
                />
              </div>

              <div className="contact_form_input">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  required
                  name="subject"
                  id="subject"
                  value={email.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="contact_form_input">
                <label htmlFor="message">Your Message</label>
                <textarea
                  type="text"
                  name="message"
                  id="message"
                  required
                  value={email.message}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="btn">
                Send Message
                <i className="fa-regular fa-paper-plane" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
