import React from "react";
import { FaBookReader, FaRegBookmark } from "react-icons/fa";
import TimelineItem from "./TimelineItem";
import SkillItem from "./SkillItem";

const Resume = () => {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="High School Dhaka, East Champaran, Bihar, India. "
            date="2017 — 2018"
            description="I have completed my 10th school with 63.6% marks"
          />
          <TimelineItem
            title="Senior Secondary School Dhaka, Bihar, India."
            date="2018 — 2020"
            description="I have completed my 12th Degree with 86.6% marks in Science streme"
          />
          <TimelineItem
            title="Babasaheb Bhimrao Ambedkar Bihar University (BRABU) Muzaffarpur, Bihar, India."
            date="2020 — 2023"
            description="I have completed my Graduation Degree with 72% marks in B.sc Physics Honours"
          />
        </ol>
      </div>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaRegBookmark />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Fiverr Freelance"
            date="2020 — Present"
            description="I am working as a freelance on fiverr."
          />
          <TimelineItem
            title="Full stack Development"
            date="2020 — Present"
            description="Having an
            in-depth knowledge including advanced WordPress, HTML5, CSS, CSS3,
            JSON, XML, JavaScript, React JS."
          />
          <TimelineItem
            title="WordPress Web Developer"
            date="2020 — Present"
            description="My job is to build your website so that it is functional and
            user-friendly."
          />
        </ol>
      </div>

      <div className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
          <SkillItem title="Web design" value={99} />
          <SkillItem title="Graphic design" value={70} />
          <SkillItem title="Branding" value={90} />
          <SkillItem title="WordPress" value={100} />
        </ul>
      </div>
    </section>
  );
};

export default Resume;
