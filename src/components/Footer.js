import React from 'react'
import "./footer.css"

function Footer() {
  return (
    <footer className='footer'>
        <div className="left-side">
            <h2>RaceHunter</h2>
            <ul className='left-side-ul'>
                <li>Σχετικά με εμάς</li>
                <li>Επικοινωνία</li>
                <li>Όροι χρήσης</li>
                <li>Πολιτική Απορρήτου</li>
            </ul>
            <span className='copyright'>© 2022 RaceHunter. All rights reserved.</span>
        </div>
        <div className="right-side">
            <span className='find-us'>Βρες μας στα Social Media!</span>
            <ul className='right-side-ul'>
                <li className="fa fa-facebook"></li>
                <li className='fa fa-twitter'></li>
                <li className='fa fa-linkedin'></li>
                <li className='fa fa-instagram'></li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer