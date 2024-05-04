import React from 'react';
import './intro.css';
import bg from '../../assets/my-profile.png';
import btnImg from '../../assets/hireMe.png';

const Intro = () => {
  return (
   <section id='intro'>
    <div className='introContent'>
        <span className='hello'>Asalam o Alaikum,</span>
        <span className='introText'>I'm <span className='introName'>Mahwish</span> <br/>Frontend Developer</span>
        <p className='introPara'>I'm a skilled frontend developer with experience in creating <br/> visually appealing and user friendly websites.</p>
        <button className='btn'><img src={btnImg} alt='Hire Me' className='btnImg'/>Hire Me   </button>
    </div>
    <img src={bg} alt='Profile' className='bg'/>

   </section>
  )
}

export default Intro;
