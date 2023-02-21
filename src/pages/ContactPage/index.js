import React from "react"; 
import { HiMail } from "react-icons/hi"; 
import { HiLocationMarker } from "react-icons/hi";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./contact-page.css";

export default function ContactPage(){
    return (
        <div>
            <Navbar />
            <br></br>
            <br></br>
            <br></br>
            <br></br>

                <div className="background-contact">
                    <h1 id="title-of-background">Επικοινωνήστε μαζί μας</h1>
                    <div className="contact-card">
                        <form>
                            <input className="contact-input"type="text" name="name" placeholder="Όνομα"></input>
                            <br></br>
                            <input className="contact-input"type="email" name="email" placeholder="Email"></input>
                            <br></br>
                            <input className="contact-input" type="text" name="subject" placeholder="Θέμα"></input>
                            <br></br>
                            <textarea id="message" className="contact-input" placeholder="Το μήνυμα σας..."></textarea>
                            <br></br>
                            <input id="send" type="submit" value="Αποστολή"></input>
                        </form>
                            <div className="contact-info-grid">
                                <h1 className="marker" id="location-marker"><HiLocationMarker /></h1> 
                                <h2 id="addr">Eγνατία 156, 546 36,<br></br>Θεσσαλονίκη, Ελλάδα</h2>
                                <h1 className="marker" id="mail-marker"><HiMail /></h1>
                                <h2 id="email">  contact@racehunter.gr</h2>
                            </div>
                    </div>
                </div>
            <Footer />
        </div>
    )
}