import React, { useRef } from 'react';
import './contact.css';
import FacebookIcon from '../../assets/facebookIcon.png';
import InstaIcon from '../../assets/instaIcon.png';
import TwitterIcon from '../../assets/twitterIcon.png';
import Github from '../../assets/github-icon.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_hwvikuw', 'template_dsh880n', form.current, {
        publicKey: 'D6hYnzjLDaiG7VKHDJ5q3',
      })
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert ('Email Sent !')
        },
        (error) => {
          console.log(error.text);
        },
      );
  };
  return (
    <section id='contact'>
        <h1 className='contactPageTitle'>Contact Me</h1>
        <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
            <input type='text' className='name' placeholder='Your Name' name='your_name' />
            <input type='email' className='email' placeholder='Your Email' name='your_email' />
            <textarea className='msg' name='message' rows={5} placeholder='Your Message'></textarea>
            <button type='submit' value="Send" className='submitBtn'>Submit</button>
             <div className='links'>
                <img src={FacebookIcon} alt='FacebookIcon' className='facebooklink' />
                <img src={InstaIcon} alt='nstaIcon' className='instalink' />
                <img src={TwitterIcon} alt='TwitterIcon' className='twitterlink' />
                <img src={Github} alt='GithubIcon' className='githublink' />
            </div> 
        </form>
    </section>
  )
}

export default Contact
