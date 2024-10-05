// src/pages/Experience.js
import React from 'react';
import styled from 'styled-components';

const Experience = () => {
  return (
    <ExperienceSection>
      <h2>Experience</h2>
      <Job>
        <JobTitle>Full Stack Web Developer, DEVTOWN</JobTitle>
        <JobDuration>June 2024 – July 2024</JobDuration>
        <JobDescription>
          Developed and maintained web applications using the MERN stack, focusing on both front-end and back-end development.
          Worked on database management and version control, while enhancing problem-solving skills.
        </JobDescription>
      </Job>

      <Job>
        <JobTitle>Projects</JobTitle>
        <ProjectList>
          <li>Zomato Landing Page - Developed a responsive landing page for Zomato.</li>
          <li>Book My Show Clone - Created a clone of the popular movie booking site using the MERN stack.</li>
          <li>Real Estate Market Analysis - Implemented a machine learning project to analyze and predict real estate prices.</li>
        </ProjectList>
      </Job>
    </ExperienceSection>
  );
};

const ExperienceSection = styled.section`
  padding: 50px;
  text-align: center;
`;

const Job = styled.div`
  margin-bottom: 30px;
`;

const JobTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 5px;
`;

const JobDuration = styled.p`
  font-style: italic;
  color: gray;
`;

const JobDescription = styled.p`
  margin: 10px 0;
`;

const ProjectList = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

export default Experience;
