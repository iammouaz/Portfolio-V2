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
    company: "Microverse",
    location: "United State - Remotely",
  },
  {
    id: 4,
    title: "Bachelor’s Degree",
    years: "2021 - 2015",
    content: "Accounting and business administration",
    company: "Damascus University",
    location: "Damascus - Syria",
  },
  {
    id: 3,
    title: "Associate’s Degree",
    years: "2022 - 2024",
    content: "Computer Science",
    company: "University of the People",
    location: "United State - Remotely",
  },
];

const experienceData = [
  {
    id: 2,
    title: "Front-End Developer",
    company: "Axenso",
    location: "Italy - Milan.",
    years: "2022 - Present",
    content: [
      "Determine and implement the structure and design of web pages based on user experience knowledge.",
      "Optimize web pages for mobile/smartphones, maximum speed, and with future scalability top of mind.",
      "Build reusable code blocks for future use leveraging a variety of markup languages",
    ],
  },
  {
    id: 1,
    title: "Software Engineer",
    company: "L-One Systems",
    location: "Germany - Darmstadt.",
    years: "2021 - Present",
    content: [
      "Build and update the official website of the company with the provided design with headless CMS & Next.js",
      "Responsible for the quality and coding of software components in different Web-based projects.",
      "Develop and lead weekly company-wide knowledge-sharing sessions focused on problem-solving.",
    ],
  },
  {
    id: 3,
    title: "Mentor (Volunteer)",
    years: "2021 - Present",
    company: "Microverse",
    location: "United State - Remotely",
    content: [
      "Mentored junior web developers, providing technical support through code reviews.",
      "Proposed improvements to code organization to improve code quality and overall performance.",
    ],
  },
  {
    id: 4,
    title: "Full Stack WordPress Developer",
    years: "2017 - 2021",
    company: "MTN",
    location: "Syria - Damascus.",
    content: [],
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
                <Timeline key={education.id} education={education} type="edu" />
              ))}
              <span className="line"></span>
            </div>
          </div>

          <div className="col-md-6">
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
            <div className="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden">
              {experienceData.map((experience) => (
                <Timeline
                  key={experience.id}
                  education={experience}
                  type="exp"
                />
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
