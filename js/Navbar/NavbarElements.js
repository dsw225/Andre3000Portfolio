// components/Navbar/navbarElements.js

import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  box-shadow: ${({ scrolling }) => scrolling ? '0 2px 4px 0 rgba(0, 0, 0, .2)' : 'none'};
  background: ${({ scrolling }) => scrolling ? 'rgba(58, 175, 169, .5)' : 'transparent'};
  height: 85px;
  display: flex;
  justify-content: space-between;
  z-index: 12;
  position: fixed;
  width: 100%;
  top: 0;
  backdrop-filter: blur(5px);
  transition: background 0.3s ease, box-shadow 0.3s ease;
`;

export const NavContainer = styled.nav`
	display: flex;
	white-space: nowrap;
  width: 100%;
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-between;
`;

export const NavLink = styled(Link)`
  color: #ffffff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 2rem;
  height: 100%;
  cursor: pointer;
  &:hover {
    color: #17252A;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #ffffff;
  @media screen and (max-width: 762px) {
  }
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  white-space: nowrap; 

  @media screen and (max-width: 762px) {
    display: none;
  }
`;

export const NavName = styled.div`
  display: flex;
  justify-content: flex-start;
  white-space: nowrap; 
`;

export const ContentWrapper = styled.div`
  margin-top: 85px; /* Adjust this value based on your navbar height */
`;
