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
            <h3 className='home__introduction__title'>ISAAC GONZALEZ</h3>
            <h1 className='home__introduction__about'>
                Computer Enthusiast. Brazilian Jiu Jitsu Practitioner. Technician @ BlackRock
                for AV-Services.
            </h1>
            <button 
              className='home__introduction__nav-projects-text'
              onClick={scrollToProjects}
            >
              Check out what I'm up to.
            </button>
            <div className='home__introduction__imgContainer'>
            <img className='home__introduction__imgContainer__img'></img>
            <img className='home__introduction__imgContainer__img'></img>
            <img className='home__introduction__imgContainer__img'></img>
            </div>
        </section>
        <section className='home__projects' id="projects">
            <h2 className='home__projects__title'>PROJECTS</h2>
            <div className='home__projects__carousel'>
              <div className='home__projects__carousel__item'>
                <img className="home__projects__carousel__item__image" src='https://static.wikitide.net/greatcharacterswiki/4/4a/Snakesmash.png'></img>
              </div>
              <div className='home__projects__carousel__item'>
              <img className="home__projects__carousel__item__image" src='https://static.wikitide.net/greatcharacterswiki/4/4a/Snakesmash.png'></img>
              </div>
              <div className='home__projects__carousel__item'>
              <img className="home__projects__carousel__item__image" src='https://static.wikitide.net/greatcharacterswiki/4/4a/Snakesmash.png'></img>
              </div>
            </div>
        </section>
    </div>
  )
}