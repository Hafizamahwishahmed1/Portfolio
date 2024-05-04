import React from 'react'
import './projects.css';
import Icon from '../../assets/icon.png';
import Github from '../../assets/github-icon.png';
import Netlify from '../../assets/netlify.png';

const Projects = () => {
  return (
    <section id='works'>
        <h2 className='workTitle'>My Projects</h2>
        <img src={Icon} alt='Icon' className='icon'/>
        <div className='github'>
          <img src={Github} alt='GithubIcon' className='githubIcon' /> 
        </div>
        <div className='linkdin'>
          <img src={Netlify} alt='NetlifyIcon' className='netlifyIcon' /> 
        </div>
        <button className='workBtn'>Click For Projects</button>
    </section>
  )
}

export default Projects
