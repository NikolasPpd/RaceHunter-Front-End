import React from "react"; 
import { AiOutlineMail } from "react-icons/ai"; 
import { HiOutlineLocationMarker } from "react-icons/hi"; 
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
                            <textarea id="message" className="contact-input" placeholder="Το μύνημα σας..."></textarea>
                            <br></br>
                            <input id="send" type="submit" value="Αποστολή"></input>
                        </form>
                        <div className="contact-info">
                            <h2><HiOutlineLocationMarker />  Eγνατία 156, 546 36,<br></br>Θεσσαλονίκη, Ελλάδα</h2>
                            <br></br>
                            <h2><AiOutlineMail />  contact@racehunter.gr</h2>
                        </div>
                    </div>
                </div>
            <Footer />
        </div>
    )
}