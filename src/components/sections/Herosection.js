import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";
import Parallax from "./Parallax";
import ReactCursorPosition from "react-cursor-position";

function Herosection(props) {
  return (
    <section
      id="home"
      className={
        props.light
          ? "home d-flex align-items-center light"
          : "home d-flex align-items-center"
      }
    >
      <div className="container">
        <div className="intro">
          <img
            src="images/me.jpg"
            alt="Mouaz El Molkey"
            width="30%"
            className="mb-4 rounded-circle"
          />
          <h1 className="mb-2 mt-0">Mouaz El Molkey</h1>
          <p>
            I'm a{" "}
            <Typed
              strings={[
                "Full-Stack developer",
                "Front-End developer",
                "Back-End developer",
              ]}
              typeSpeed={80}
              backSpeed={40}
              attr="value"
              loop
            >
              <label value></label>
            </Typed>
          </p>

          <ul className="social-icons light list-inline mb-0 mt-4">
            <li className="list-inline-item">
              <a href="https://www.instagram.com/moazmulki/">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://twitter.com/MoazMulki1">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://github.com/iammouaz">
                <i class="fab fa-github"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.linkedin.com/in/mouaz-molki/">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://angel.co/u/mouazmolkey">
                <i className="fab fa-angellist"></i>
              </a>
            </li>
          </ul>

          <div className="mt-4">
            <Link
              className="btn btn-default"
              to="section-contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              Hire me
            </Link>
          </div>
        </div>

        <div className="scroll-down">
          <Link
            to="section-about"
            spy={true}
            smooth={true}
            duration={500}
            className="mouse-wrapper"
          >
            <span>Scroll Down</span>
            <span className="mouse">
              <span className="wheel"></span>
            </span>
          </Link>
        </div>
        <ReactCursorPosition>
          <Parallax />
        </ReactCursorPosition>
      </div>
    </section>
  );
}

export default Herosection;
