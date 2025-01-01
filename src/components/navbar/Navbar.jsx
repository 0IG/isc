import React from 'react'
import './Navbar.scss'

export default function Navbar() {

  return (
    <div className='Navbar'>
        <ul className='Navbar__list'>
        <li className='Navbar__listItem'>
            <a href='https://ossense.netlify.app/' target='_blank'>PROJECTS</a>
            </li>
            <li className='Navbar__listItem'>
              <a href='https://www.linkedin.com/in/gonisc/' target='_blank'>ABOUT</a>
            </li>
            <li className='Navbar__listItem'>
              <a href='https://www.linkedin.com/in/gonisc/' target='_blank'>LINKEDIN</a>
            </li>
            <li className='Navbar__listItem'>
                <img className="Navbar__icon" src='https://i.imgur.com/xRNzGBT.png'></img>
            </li>
            <li className='Navbar__listItem'>
              <a href='https://github.com/0IG' target='_blank'>GITHUB</a>
            </li>
            <li className='Navbar__listItem'>
            <a href='mailto:imisaacgonzalez@gmail.com'>CONTACT</a>
            </li>
            <li className='Navbar__listItem'>
            <a href='https://medium.com/@8i8' target='_blank'>BLOG</a>
            </li>
        </ul>
    </div>
  )
}
