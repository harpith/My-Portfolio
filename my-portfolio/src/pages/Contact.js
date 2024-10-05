// src/pages/Contact.js
import React from 'react';
import styled from 'styled-components';

const Contact = () => {
  return (
    <ContactSection>
      <h2>Contact Me</h2>
      <Form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </Form>
    </ContactSection>
  );
};

const ContactSection = styled.section`
  padding: 50px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 300px;
  margin: 0 auto;
`;

export default Contact;
