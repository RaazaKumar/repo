import React, { useRef } from 'react';
import './Nav.css';
import { Link } from 'react-scroll';

import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';


function Nav() {
  const mobile = useRef();

  //Togle Hamburger Menu
  const toggleMobileMenu = () => {
    mobile.current.classList.toggle('activemobile');
  };
  // Hide Mobile Menu on Link Click
  const hideMenu = () => {
    mobile.current.classList.remove('activemobile');
  };

useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    let t1 = gsap.timeline();
    t1.from("nav h1", {
      y: -100,
      duration: 0.5,
      opacity: 0
    });
    t1.from("nav ul li", {
      y: -100,
      opacity: 0,
      duration: 0.5,
      stagger: 0.2
    });
  });

  return () => ctx.revert(); // clean up
}, []);

  return (
    <nav>
      <h1>RK SINGH</h1>

     <ul className='desktop-menu'>
  <li><Link to='home' smooth={true} duration={500} activeClass="active" spy={true}>Home</Link></li>
  <li><Link to='about' smooth={true} duration={500} activeClass="active" spy={true}>About</Link></li>
  <li><Link to='projects' smooth={true} duration={500} activeClass="active" spy={true}>Projects</Link></li>
  <li><Link to='contact' smooth={true} duration={500} activeClass="active" spy={true}>Contact</Link></li>
</ul>


      <div className='hamburger' onClick={toggleMobileMenu}>
        <div className='ham'></div>
        <div className='ham'></div>
        <div className='ham'></div>
      </div>

     <ul className='mobile-menu' ref={mobile}>
  <li><Link to='home' smooth={true} duration={500} activeClass="active" spy={true} onClick={hideMenu}>Home</Link></li>
  <li><Link to='about' smooth={true} duration={500} activeClass="active" spy={true} onClick={hideMenu}>About</Link></li>
  <li><Link to='projects' smooth={true} duration={500} activeClass="active" spy={true} onClick={hideMenu}>Projects</Link></li>
  <li><Link to='contact' smooth={true} duration={500} activeClass="active" spy={true} onClick={hideMenu}>Contact</Link></li>
</ul>

    </nav>
  );
}

export default Nav;
