import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Timeline from "../elements/Timeline";

const educationData = [
  {
    id: 2,
    title: "Full Stack Development Certificate",
    years: "2022 - 2021",
    content:
      "I've earn this credential after working through 1500+ hours of remote pair programming, learning to code with teams from around the world",
  },
  {
    id: 3,
    title: "Bachelor’s Degree",
    years: "2021 - 2015",
    content: "Accounting and business administration",
  },
];

const experienceData = [
  {
    id: 1,
    title: "Software Engineer",
    company: "L-One Systems",
    location: "Germany - Darmstadt.",
    years: "2021 - Present",
    content:
      "Responsible for the quality and coding of software components in different Web-based projects, including the official website of the company and its talent pool automation system. Also, provide the proper cooperation with the marketing team to integrate their lead generation protocols with the website and other tracking tools. As the culture of the company encourages knowledge-sharing, I present and develop the Problem Solving sessions on a weekly basis.",
  },
  {
    id: 2,
    title: "Front-End Developer",
    company: "Axenso",
    location: "Italy - Milan.",
    years: "2022 - Present",
    content:
      "Determining the structure and design of web pages, striking a balance between functional and aesthetic design, and ensuring web design is optimized for smartphones",
  },
  {
    id: 3,
    title: "User Acceptance Testing",
    years: "2019 - 2021",
    company: "MTN",
    location: "Syria - Damascus.",
    content:
      "",
  },
];

function Experiences() {
  return (
    <section id="experience">
      <div className="container">
        <Pagetitle title="Experience" />
        <div className="row">
          <div className="col-md-6">
            <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">
              {educationData.map((education) => (
                <Timeline key={education.id} education={education} />
              ))}
              <span className="line"></span>
            </div>
          </div>

          <div className="col-md-6">
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
            <div className="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden">
              {experienceData.map((experience) => (
                <Timeline key={experience.id} education={experience} />
              ))}
              <span className="line"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
