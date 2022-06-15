import React from "react";
import TrackVisibility from "react-on-screen";
import AnimatedButton from "../animation/AnimatedButton/AnimatedButton";
import Counter from "../elements/Counter";
import Pagetitle from "../elements/Pagetitle";
import Skill from "../elements/Skill";

const aboutContent = {
  name: "Mouaz",
  avatarImage: "images/me_working.jpg",
  content:
    "I am Mouaz El Molkey, Full Stack Developer. I have rich experience in web site design and building and customization with Javascript Libraries Such as React",
};

const progressData = [
  {
    id: 1,
    title: "React",
    percantage: 95,
    progressColor: "#FFD15C",
  },
  {
    id: 3,
    title: "TypeScript",
    percantage: 90,
    progressColor: "#198754",
  },
  {
    id: 3,
    title: "Ruby on Rails",
    percantage: 80,
    progressColor: "#6C6CE5",
  },
  {
    id: 4,
    title: "Node.JS",
    percantage: 70,
    progressColor: "#FF4C60",
  },
];

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
          <div className="col-md-3">
            <div className="text-center text-md-left">
              <img
                className="rounded-3"
                src={aboutContent.avatarImage}
                alt={aboutContent.name}
              />
            </div>
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
          </div>

          <div className="col-md-9 triangle-left-md triangle-top-sm">
            <div className="rounded bg-white shadow-dark padding-30">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <p>{aboutContent.content}</p>
                  <div className="mt-3">
                    <a
                      target="_blank"
                      href="https://drive.google.com/file/d/1CaqHY92y0QZ0_LoL2o-ZUCX9pgwL_a84/view?usp=sharing"
                      className="btn btn-default"
                      rel="noreferrer"
                    >
                      Download CV
                    </a>
                  </div>
                  <div
                    className="spacer d-md-none d-lg-none"
                    data-height="30"
                  ></div>
                </div>
                <div className="col-md-6 row justify-content-center">
                  {/* {progressData.map((progress) => (
                    <TrackVisibility
                      once
                      key={progress.id}
                      className="progress-wrapper"
                    >
                      <Skill progress={progress} />
                    </TrackVisibility>
                  ))} */}
                  <AnimatedButton />
                </div>
              </div>
            </div>
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
