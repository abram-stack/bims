import React from 'react'
import htmlIcon from '../assets/images/htmlIcon.png'
import cssIcon from '../assets/images/cssIcon.png'
import jsIcon from '../assets/images/jsIcon.png'
import reactIcon from '../assets/images/reactIcon.png'
import expressIcon from '../assets/images/nodeIcon.png'
import mongoIcon from '../assets/images/mongoIcon.png'
import firebaseIcon from '../assets/images/firebaseIcon.png'
import figmaIcon from '../assets/images/figmaIcon.png'
import fraground from '../assets/images/fraground.png'

export default function Experience() {
  return (
    <>
      <div className='experience-container container'>
        <div className='exp-intro'>
          <h3>Experience</h3>
          <p>
            I have been now doing web development for about 2 years now. The
            quests continue and I&apos;m eager to learn the On-Going Frontend
            tech
          </p>
        </div>

        <div className='work'>
          <div className='tech-stack'>
            <h4>Some Tech Stack <br/>I&apos; worked with:</h4>
            {/* Feature: React Swiper for skills*/}
            <div className='skills'>
              <img src={htmlIcon } alt='html icon' />
              <img src={cssIcon} alt='css icon'/>
              <img src={jsIcon} alt='js icon'/>
              <img src={reactIcon} alt='react icon'/>
              <img src={expressIcon} alt='express icon'/>
              <img src={mongoIcon} alt='mongoDB icon'/>
              <img src={firebaseIcon} alt='google firebase icon'/>
              <img src={figmaIcon} alt='figma icon'/>
            </div>
          </div>

          <div className='workplace'>
            <h4>Where I&apos;ve worked:</h4>
              <img src={fraground} alt='fraground'/>
          </div>
        </div>

      </div>
    </>
  );
}
