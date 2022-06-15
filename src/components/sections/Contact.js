import React, { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { motion } from "framer-motion";
import Pagetitle from "../elements/Pagetitle";
import { useForm } from "@formspree/react";

function Contact() {
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [, handleSubmit] = useForm("mqkwgokn");

  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    if (!formdata.name) {
      setError(true);
      setMessage("Name is required");
    } else if (!formdata.email) {
      setError(true);
      setMessage("Email is required");
    } else if (!formdata.subject) {
      setError(true);
      setMessage("Subject is required");
    } else if (!formdata.message) {
      setError(true);
      setMessage("Message is required");
    } else {
      setError(false);
      setMessage("You message has been sent!!!");
      handleSubmit(formdata);
    }
  };

  const handleChange = (event) => {
    setFormdata({
      ...formdata,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleAlerts = () => {
    if (error && message) {
      return <div className="alert alert-danger mt-4">{message}</div>;
    } else if (!error && message) {
      return <div className="alert alert-success mt-4">{message}</div>;
    } else {
      return null;
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <Pagetitle title="Get in Touch" />

        <div className="row">
          <div className="col-md-4">
            <div className="contact-info">
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}
              >
                <h3>Let's talk about everything!</h3>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}
              >
                <p>
                  Don't like forms? Send me an{" "}
                  <a href="mailto:moazmulki33@gmail.com">email</a>. 👋
                </p>
              </ScrollAnimation>
            </div>
          </div>

          <div className="col-md-8">
            <form
              id="contact-form"
              className="contact-form mt-6"
              onSubmit={submitHandler}
            >
              <div className="row">
                <div className="column col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      id="InputName"
                      placeholder="Your name"
                      onChange={handleChange}
                      value={formdata.name}
                    />
                  </div>
                </div>

                <div className="column col-md-6">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      id="InputEmail"
                      name="email"
                      placeholder="Email address"
                      onChange={handleChange}
                      value={formdata.email}
                    />
                  </div>
                </div>

                <div className="column col-md-12">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="InputSubject"
                      name="subject"
                      placeholder="Subject"
                      onChange={handleChange}
                      value={formdata.subject}
                    />
                  </div>
                </div>

                <div className="column col-md-12">
                  <div className="form-group">
                    <textarea
                      name="message"
                      id="InputMessage"
                      className="form-control"
                      rows="5"
                      placeholder="Message"
                      onChange={handleChange}
                      value={formdata.message}
                    ></textarea>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                name="submit"
                id="submit"
                value="Submit"
                className="btn btn-default"
              >
                Send Message
              </button>
            </form>
            {handleAlerts()}
            <ul className="social-icons light list-inline mb-0 mt-4">
              <motion.li
                whileHover={{ scale: 2, rotate: [0, 30, -30, 0] }}
                whileTap={{ scale: 1.5 }} className="list-inline-item">
                <a href="https://www.instagram.com/moazmulki/">
                  <i className="fab fa-instagram"></i>
                </a>
              </motion.li>
              <motion.li
                whileHover={{ scale: 2, rotate: [0, 30, -30, 0] }}
                whileTap={{ scale: 1.5 }} className="list-inline-item">
                <a href="https://twitter.com/MoazMulki1">
                  <i className="fab fa-twitter"></i>
                </a>
              </motion.li>
              <motion.li
                whileHover={{ scale: 2, rotate: [0, 30, -30, 0] }}
                whileTap={{ scale: 1.5 }}
                className="list-inline-item"
              >
                <a href="https://github.com/iammouaz">
                  <i class="fab fa-github"></i>
                </a>
              </motion.li>
              <motion.li
                whileHover={{ scale: 2, rotate: [0, 30, -30, 0] }}
                whileTap={{ scale: 1.5 }} className="list-inline-item">
                <a href="https://www.linkedin.com/in/mouaz-molki/">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </motion.li>
              <motion.li
                whileHover={{ scale: 2, rotate: [0, 30, -30, 0] }}
                whileTap={{ scale: 1.5 }} className="list-inline-item">
                <a href="https://angel.co/u/mouazmolkey">
                  <i className="fab fa-angellist"></i>
                </a>
              </motion.li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
