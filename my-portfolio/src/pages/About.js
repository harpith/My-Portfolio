// src/pages/About.js
import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <AboutSection>
      <h2>About Me</h2>
    <p>  I am a motivated and hardworking Computer Science student at Mahindra University, maintaining a CGPA of 8.5. With a strong command of programming languages and a deep passion for fostering innovation in technology, I am eager to enhance my skills through engaging internship experiences. I pride myself on being dependable, driven, and dedicated, aiming to make significant contributions to any team or project I am part of.</p>
    </AboutSection>
  );
};

const AboutSection = styled.section`
  padding: 50px;
  text-align: center;
`;

export default About;
