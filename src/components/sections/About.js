import React from "react";
import TrackVisibility from "react-on-screen";
import AnimatedButton from "../animation/AnimatedButton/AnimatedButton";
import Counter from "../elements/Counter";
import Pagetitle from "../elements/Pagetitle";

const aboutContent = {
  name: "Mouaz",
  avatarImage: "images/me_working.JPG",
  content:
    "I am Mouaz El Molkey, Full Stack Developer. I offer rich experience in website design, development and customization with JavaScript & Ruby libraries.",
};

const counterData = [
  {
    id: 1,
    title: "Projects completed",
    count: 42,
    icon: "icon-fire",
  },
  {
    id: 3,
    title: "Works for companies",
    count: 3,
    icon: "icon-people",
  },
  {
    id: 4,
    title: "Stacks Known",
    count: 17,
    icon: "icon-badge",
  },
];

function About() {
  return (
    <section id="about">
      <div className="container">
        <Pagetitle title="About Me" />
        <div className="row align-items-center">
          <div className="col-md-8 triangle-left-md triangle-top-sm">
            <div className="rounded bg-white shadow-dark padding-30">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <p>{aboutContent.content}</p>
                  <div
                    className="spacer d-md-none d-lg-none"
                    data-height="30"
                  ></div>
                </div>
                <div className="col-md-6 row justify-content-center">
                  <div className="text-center text-md-left">
                    <img
                      className="rounded-3"
                      src={aboutContent.avatarImage}
                      alt={aboutContent.name}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-end align-items-end">
            <AnimatedButton />
          </div>
        </div>
        <div className="spacer" data-height="70"></div>
        <div className="row fix-spacing justify-content-center">
          {counterData.map((counter) => (
            <div key={counter.id} className="col-md-3 col-sm-6">
              <TrackVisibility once>
                <Counter counterItem={counter} />
              </TrackVisibility>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
