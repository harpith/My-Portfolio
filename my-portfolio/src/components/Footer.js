// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterSection>
      <p>© 2024 Harpith Rao. All rights reserved.</p>
    </FooterSection>
  );
};

const FooterSection = styled.footer`
  text-align: center;
  padding: 20px;
  background-color: #333;
  color: #fff;
`;

export default Footer;
