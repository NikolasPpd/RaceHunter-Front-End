import React, { useState } from 'react';
import  {Link} from "react-router-dom";
import './styles.css'
import img from './images/RaceHunter_Gradient_Logo.png';

export default function Navbar(){
     
    const[query,setQuery] = useState("");
    console.log(query)
    return (
      <div>
         <header>
            //Όταν υπάρξουν σελίδες σαν Login ή εγγραφή προσθέστε τότε το <Link></Link>
            <Link to="/"> <img  className = 'image' src = {img}/></Link>
            <div className='Anazitisi'>
                <input 
                    className = "texting" 
                    type = "text" 
                    placeholder='Αναζήτηση αγώνα ή τοποθεσίας'
                    onChange={(e => setQuery(e.target.value))}/>
                
            </div>
            <div className='Extra'>
                <span><button className='Home'>Αρχική</button></span>
                <span><button className='LogIn'>Σύνδεση</button></span>
            </div>
        </header>
      </div>
       
    )
}
