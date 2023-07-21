import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Box } from "@mui/material";
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

const CustomLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 5,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: '#323232',
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: '#8400FF',
  },
}));
const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          let scrollTop = window.scrollY + 7.2;
          let docHeight = document.body.scrollHeight;
          let winHeight = window.innerHeight;
          setProgress((scrollTop / (docHeight - winHeight)) * 100);
          ticking = false;
        });

        ticking = true;
      }
    };
    handleScroll();

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className='navbar'>
      <header>
        <h3>
          {"< "}
          <span className='nav-logo'>Milan</span>
          {" />"}
        </h3>
        <nav ref={navRef}>
          <ul>
            <li>
              <a href='#about' onClick={() => showNavbar()}>
                About
              </a>
            </li>
            <li>
              <a href='#projects' onClick={() => showNavbar()}>
                Projects
              </a>
            </li>
            <li>
              <a href='#skills' onClick={() => showNavbar()}>
                Skills
              </a>
            </li>
            <li>
              <a href='#experience' onClick={() => showNavbar()}>
                Experience
              </a>
            </li>
            <li>
              <a href='#education' onClick={() => showNavbar()}>
                Education
              </a>
            </li>
            <li>
              <a href='#contact' onClick={() => showNavbar()}>
                Contact Me
              </a>
            </li>
          </ul>

          <button className='nav-btn nav-close-btn' onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className='nav-btn' onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
      <Box sx={{ width: "100%" }}>
        <CustomLinearProgress
          variant='determinate'
          sx={{ zIndex: "-1" }}
          value={progress}
        />
      </Box>
    </div>
  );
};

export default Navbar;
