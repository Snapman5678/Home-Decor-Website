import React from 'react'
import AboutImage from '../assets/homedecorabout.jpg'
import '../styles/About.css'

function About() {
  return (
    <div className="about">
        <div 
            className="aboutTop"
            style={{ backgroundImage: `url(${AboutImage})` }}
        ></div>
        <div className="aboutBottom">
            <h1> ABOUT US </h1>
            <p> 
                This mini project of a simple Web Application is done by Adithya S (PES2UG22CS031), A Arshad Khan (PES2UG22CS001) and Aamir Mohammed (PES2UG22CS005) as a part of the Web Technologies course.
                We are a team of three from PES University, Bangalore. We are currently pursuing our Bachelors in Computer Science and Engineering. We hope to learn more about Web Development and its various aspects through this project.
                We have used ReactJS for the frontend and MongoDB for the backend. We have used React Router for routing and React Context API for state management. We have used Material UI for styling and icons.
            </p>
        </div>
    </div>
  )
}

export default About