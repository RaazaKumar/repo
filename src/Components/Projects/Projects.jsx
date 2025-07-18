import React from 'react'
import Card from '../Card/Card'
import mern from '../../Assets/mern.png'
import './Projects.css'
export default function Projects() {
  return (
    <div id="projects">
        <h1 className="projectsExperiment">2+ YEARS EXPERIENCED IN PROJECTS</h1>
        <div className="slider">
            <div className="sliderBox">
            <Card Title="Quick Bite (MERN Stack - food Delivery Web App" image={mern} />
            <Card Title="Amazon Clone (HTML CSS & JS)" image={mern} />
            <Card Title="Background Changer (React.js)" image={mern} />
            <Card Title="BMI Calculator(React.js)" image={mern} />
            <Card Title="Bulb (HTML CSS & JS)" image={mern} />
            <Card Title="Clock (React)" image={mern} />
            <Card Title="OTP (Reac.js + Node.js)" image={mern} />
            <Card Title="Portfolio (HTML CSS & JS)" image={mern} />
            <Card Title="Portfolio (React + Formspree)" image={mern} />
            <Card Title="Saraswati Puja Project (React.js)" image={mern} />
            <Card Title="Stone Paper Scissor (HTML CSS & JS)" image={mern} />
            <Card Title="Weather App (React)" image={mern} />
            <Card Title="Virtual Assistant (Agentic Ai)" image={mern} />
            <Card Title="AI Powered Fitness Website(React.js + Node.js)" image={mern} />
            <Card Title="AI Chatbot (Agentic Ai)" image={mern} />
            <Card Title="Continue....." image={mern} />
            </div>

        </div>
    </div>
  )
}
