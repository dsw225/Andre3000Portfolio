import React, { useState, useEffect } from "react";
import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
	NavName,
	NavContainer,
} from "./NavbarElements";
import { Link, animateScroll as scroll } from "react-scroll";

function Navbar() {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
		  <Nav id="myHeader" scrolling={scrolling}>
			  <NavContainer>
          <NavName>
            <Link to="home" smooth={true} duration={500}>
              <NavLink >
                ANDRÉ 3000
              </NavLink>
            </Link>
          </NavName>
          <Bars />

          <NavMenu>
            <Link to="music" smooth={true} duration={500} offset={0}>
              <NavLink>
                MUSIC
              </NavLink>
            </Link>
            <Link to="acting" smooth={true} duration={500} offset={0}>
              <NavLink>
                ACTING
              </NavLink>
            </Link>
            <Link to="eras" smooth={true} duration={500} offset={0}>
              <NavLink>
                ERAS
              </NavLink>
            </Link>
          </NavMenu>
        </NavContainer>
      </Nav>
    </>
  );
};

export default Navbar;