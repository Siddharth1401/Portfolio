import React from 'react'
import './skills.css'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'

const Skills = () => {
  return (
    <section id='skills'>
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">I have honed my skills in various programming languages and front-end technologies, becoming proficient in Figma, HTML, CSS, JavaScript and React</span>
        <div className="skillBars">
          <div className="skillBar">
            <img src={UIDesign} alt="Web Development" className="skillBarImg" />
            <div className="skillbartext">
              <h2>Web Development</h2>
              <p>I have proficiency in web development technologies such as HTML, CSS, and JavaScript</p>
              </div>
          </div>
          <div className="skillBar">
            <img src={WebDesign} alt="Programming Languages" className="skillBarImg" />
            <div className="skillbartext">
              <h2>Programming Languages</h2> 
              <p>I am skilled in programming languages like Java, JavaScript, and Python.</p>
              </div>
          </div>
          <div className="skillBar">
            <img src={AppDesign} alt="Problem-Solving" className="skillBarImg" />
            <div className="skillbartext">
              <h2>Problem-Solving</h2>
              <p>Throughout my projects, I have demonstrated problem-solving skills, especially in the context of developing interactive games and user interfaces.</p>
              </div>
          </div>
        </div>
    </section>
  )
}

export default Skills
