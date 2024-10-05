// src/pages/Skills.js
import React from 'react';
import styled from 'styled-components';
import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa';

const Skills = () => {
  return (
    <SkillsSection>
      <h2>Skills</h2>
      <SkillsGrid>
        <SkillCard>
          <FaReact size={50} />
          <h3>React</h3>
        </SkillCard>
        <SkillCard>
          <FaNodeJs size={50} />
          <h3>Node.js</h3>
        </SkillCard>
        <SkillCard>
          <FaPython size={50} />
          <h3>Python</h3>
        </SkillCard>
      </SkillsGrid>
    </SkillsSection>
  );
};

const SkillsSection = styled.section`
  padding: 50px;
  text-align: center;
`;

const SkillsGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
`;

const SkillCard = styled.div`
  text-align: center;
`;

export default Skills;
