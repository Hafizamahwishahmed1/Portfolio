import React from 'react'
import './skills.css';
import WebDevelopment from '../../assets/webdevelopmenticon.png';

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className='SkillDesc'>I'm a skilled and passionate frontend developer with experiece in creating appealing and user-friendly websites.<br /> I have a strong understanding of code and design and a keen eye for detail.<br /> I'm proficient in HTML, CSS, JavaScript and React.</span>
        <div className='skillBars'>
          <div className='skillBar'>
            <img src={WebDevelopment} alt='WebDevelopment' className='skillBarImg'/>
            <div className='skillBarText'>
              <h2>Web Development</h2>
              <p>I'm a experiece frontend developer and I'm proficient in HTML, CSS, Bootstrap, JavaScript, Tailwind CSS and React. </p>
            </div>
          </div>  
        </div>
    </section>
  )
}

export default Skills
