import React, { use } from 'react'
import './About.css'
import Card from '../Card/Card'
// import mern from "../../Assets/mern.png";
import java from '../../assets/java.png';
import dsa from '../../assets/dsa.png';

export default function About() {

  return (
   <div id="about">

<div className="left-about">

      <div className="circle-line">
      <div className="circle"></div>
      <div className="line"></div>
      <div className="circle"></div>
      <div className="line"></div>
      <div className="circle"></div>
      </div>

      <div className="aboutDetails">
        <div className="personalInfo">
          <h1>Personal Info</h1>
          <ul>
            <li><span>Name:</span>Raja Kumar</li>
            <li><span>Age:</span>21</li>
            <li><span>Gender:</span>Male</li>
            <li><span>Language Known:</span>Hindi , English</li>
          </ul>
        </div>

         <div className="personalInfo">
          <h1>Education</h1>
          <ul>
            <li><span>Degree:</span>BCA</li>
            <li><span>Branch:</span>Computer Sciendce & Engineering</li>
            <li><span>CGPA:</span>7.1</li>
            <li><span>College:</span>CIMAGE COLLEGE, Patna</li>
            <li><span>Year:</span>2022-2025</li>

          </ul>
        </div>

         <div className="personalInfo">
          <h1>Skills</h1>
          <ul>
            <li>MERN STACK Web Development</li>
            <li>JAVA</li>
            <li>DSA</li>
            <li>Networking</li>
          </ul>
        </div>
      </div>

</div>
    

    <div className="right-about">
    <Card Title="MERN" image={java}/>
    <Card Title="JAVA" image={java}/>
    <Card Title="DSA" image={dsa}/></div>
   </div>
  )
}
