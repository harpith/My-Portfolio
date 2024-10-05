// src/pages/Home.js
import React from 'react';
import styled from 'styled-components';

const Home = () => {
  return (
    <HomeSection>
      <h1>Hello, I'm Korukanti Harpith Rao!</h1>
      <p>Web Developer | AI/ML Enthusiast | Software Engineer</p>
    </HomeSection>
  );
};

const HomeSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #282c34;
  color: white;
`;

export default Home;
