// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Nav>
      <Logo>Korukanti Harpith Rao</Logo>
      <NavMenu>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/experience">Experience</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </NavMenu>
    </Nav>
  );
};

const Nav = styled.nav`
  background-color: #333;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.h1`
  color: #fff;
`;

const NavMenu = styled.div`
  display: flex;
  gap: 20px;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  &:hover {
    color: #aaa;
  }
`;

export default Navbar;
