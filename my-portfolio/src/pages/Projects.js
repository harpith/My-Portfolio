// src/pages/Projects.js
import React from 'react';
import styled from 'styled-components';

const Projects = () => {
  return (
    <ProjectsSection>
      <h2>Projects</h2>
      <ProjectsGrid>
        <ProjectCard>
          <h3>Book My Show Clone</h3>
          <p>MERN stack project that mimics the functionality of a popular movie booking site.</p>
          <a href="https://github.com/harpith/book-my-show-clone" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </ProjectCard>
        <ProjectCard>
          <h3>AI Trading Bot</h3>
          <p>An AI-based trading bot that analyses market data to make trading decisions.</p>
          <a href="https://github.com/harpith/trading-bot" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </ProjectCard>
      </ProjectsGrid>
    </ProjectsSection>
  );
};

const ProjectsSection = styled.section`
  padding: 50px;
  text-align: center;
`;

const ProjectsGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
`;

const ProjectCard = styled.div`
  text-align: center;
`;

export default Projects;
