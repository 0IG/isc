import React from 'react'
import './Navbar.scss'

export default function Navbar() {

  return (
    <div className='Navbar'>
        <ul className='Navbar__list'>
            <li className='Navbar__listItem'>
              <a href='https://www.linkedin.com/in/gonisc/'>ABOUT</a>
            </li>
            <li className='Navbar__listItem'>
              <a href='https://www.linkedin.com/in/gonisc/'>LINKEDIN</a>
            </li>
            <li className='Navbar__listItem'>
                <img className="Navbar__icon" src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/582bb3a7-d9ae-4817-a381-339a45859631/d5dp90k-5185e00e-da7e-4599-a99a-6c19a46ef652.png/v1/fill/w_400,h_405/logo_death_note_by_goku6384_by_goku6384_d5dp90k-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU4MmJiM2E3LWQ5YWUtNDgxNy1hMzgxLTMzOWE0NTg1OTYzMVwvZDVkcDkway01MTg1ZTAwZS1kYTdlLTQ1OTktYTk5YS02YzE5YTQ2ZWY2NTIucG5nIiwiaGVpZ2h0IjoiPD00MDUiLCJ3aWR0aCI6Ijw9NDAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cLzU4MmJiM2E3LWQ5YWUtNDgxNy1hMzgxLTMzOWE0NTg1OTYzMVwvZ29rdTYzODQtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.a0V6Qhzic_c_SIT5_qMC4ybu07AtdzSesKDZ40M-Z-k'></img>
            </li>
            <li className='Navbar__listItem'>
              <a href='https://github.com/0IG'>GITHUB</a>
            </li>
            <li className='Navbar__listItem'>
            <a href='mailto:imisaacgonzalez@gmail.com'>CONTACT</a>
            </li>
        </ul>
    </div>
  )
}
