import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

function Timeline({ education }) {
  const { years, title, content, company, location } = education;
  return (
    <ScrollAnimation
      animateIn="fadeInUp"
      animateOut="fadeInOut"
      animateOnce={true}
    >
      <div className="timeline-container pt-4">
        <div className="content">
          <span className="time">{years}</span>
          <h3 className="title">{title}</h3>
          <span style={{ fontStyle: "italic" }} className="p-4">
            {company} - <span className="font-weight-bold"> {location}</span>
          </span>
          <p>{content}</p>
        </div>
      </div>
    </ScrollAnimation>
  );
}

export default Timeline;
