import React from 'react'
import  {Link} from "react-router-dom";
import "./footer.css"

export default  function Footer() {
  return (
    <footer className='footer'>
        <div className="left-side">
            <h1 className='footer-head'>RaceHunter</h1>
            <ul className='left-side-ul'>
                <li>Σχετικά με εμάς</li>
                <li><Link className='footer-link' to="./contact">Επικοινωνία</Link></li>
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

