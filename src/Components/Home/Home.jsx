import React from 'react'
import './Home.css'
import { Typewriter } from 'react-simple-typewriter'
import man from '../../assets/man.png'


import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';

export default function Home() {

  useLayoutEffect(()=>{ 
    const ctx = gsap.context(()=>{
      const tl1 = gsap.timeline();
      tl1.from(".line-1",{
        y: 100,
        duration: 0.5,
        opacity: 0
      })
       tl1.from(".line-2",{
        y: 80,
        duration: 0.5,
        opacity: 0
      })
       tl1.from(".line-3",{
        y: 100,
        duration: 0.5,
        opacity: 0
      })
      // tl1.from(".right-home img",{
      //   x: 100,
      //   opacity: 0,
      //   duration: 0.2,
      //   // stagger: 0.2
      // })
    })
    return ()=> ctx.revert(); //clean up
  },[])

  return (
   <div id="home">
   <div className="left-home">
    <div className="home-details">
      <div className="line-1">I ' m</div>
      <div className="line-2">RAJA KUMAR</div>
      <div className="line-3">
       
    <Typewriter
    words={["WEB DEVELOPER", "SOFTWARE DEVELOPER", "DATA ANALYST", "EDITOR"]}
    loop={false}
    cursor
    cursorStyle='|'
    typeSpeed={100}
    deleteSpeed={50}
    delaySpeed={1000}
  />
        </div>
        <button>
          Hire Me
        </button>
    </div>
   </div>
   <div className="right-home">
    <img src={man} alt="" />
   </div>
    </div>
  )
}
