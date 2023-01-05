import React from "react";
import {Link} from "react-router-dom";
import {FaFacebook, FaInstagram, FaTwitter, FaYoutube} from "react-icons/fa";
import "./footer.css";

export default  function Footer() {
  return (
    <footer className='footer'>
        <div className="left-side">
            <h1 className='footer-head'>RaceHunter</h1>
            <ul className='left-side-ul'>
                <li>Σχετικά με εμάς</li>
                <li><Link className='footer-link' to="/contact">Επικοινωνία</Link></li>
                <li>Όροι χρήσης</li>
                <li>Πολιτική Απορρήτου</li>
            </ul>
            <span className='copyright'>© 2022 RaceHunter. All rights reserved.</span>
        </div>
        <div className="right-side">
            <span className='find-us'>Βρες μας στα Social Media!</span>
            <ul className='right-side-ul'>
                <li className="social-icon" id="icon-fb" onClick={() => window.open('https://www.facebook.com/racehunter.gr', '_blank')}><FaFacebook /></li>
                <li className="social-icon" id="icon-ig" onClick={() => window.open('https://www.instagram.com/racehunter.gr/', '_blank')}><FaInstagram /></li>
                <li className="social-icon" id="icon-twitter" onClick={() => window.open('https://twitter.com/RaceHunterGR', '_blank')}><FaTwitter /></li>
                <li className="social-icon" id="icon-yt" onClick={() => window.open('https://www.youtube.com/@racehunterGR', '_blank')}><FaYoutube /></li>
            </ul>
        </div>
    </footer>
  )
}

