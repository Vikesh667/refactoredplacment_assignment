import React, { useState } from "react";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillHome ,AiOutlineLogin} from 'react-icons/ai';
import { FcAbout } from 'react-icons/fc';
import { SiGnuprivacyguard } from 'react-icons/si';
import {CgProfile } from 'react-icons/cg';
import { Grid, Paper, Avatar, Typography} from '@material-ui/core'


import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h1 style={{fontSize:"60px",color:"blue"}}>
          
          <CgProfile/>
        
          </h1>
          
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/"><AiFillHome/>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about"><FcAbout/>about</NavLink>
            </li>
            <li>
              <NavLink to="/login"><AiOutlineLogin/>login</NavLink>
            </li>
            <li>
              <NavLink to="/signup"><SiGnuprivacyguard/>signup</NavLink>
            </li>
            <li>
              <NavLink to="/vikesh">Vikesh</NavLink>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
             <NavLink to='/profile'><CgProfile/></NavLink>
            </li>
           
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

      {/* hero section  */}
      {/* <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical</h1>
      </section> */}
    </>
  );
};

export default Navbar;