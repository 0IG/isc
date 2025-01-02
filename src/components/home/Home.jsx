import React from 'react'
import './Home.scss'

export default function Home() {
  const scrollToProjects = () => {
    document.querySelector('.home__projects').scrollIntoView({ 
      behavior: 'smooth'
    });
  }

  return (
    <div className='home'>
        <section className='home__introduction'>
            <h3 className='home__introduction__name'>ISAAC GONZALEZ</h3>
            <h1 className='home__introduction__about'>
                Computer Enthusiast. Brazilian Jiu Jitsu Practitioner. Technician @ BlackRock
                for AV-Services
            </h1>
            <button 
              className='home__introduction__nav-projects-text'
              onClick={scrollToProjects}
            >
              Check out what I'm up to.
            </button>
        </section>
        <section className='home__projects' id="projects">
            PROJECTS
        </section>
        <section className='home__skills'></section>
        <section className='home__contact'>
            <h2>Contact</h2>
            <h4 className='home__contact__text'>
                I'm always looking to connect and grow not just my network but friends!
                Feel free to use the links below to reach out!
            </h4>
            <h3>Linkedin</h3>
        </section>
    </div>
  )
}