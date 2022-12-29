import React, { useState } from 'react';
import  { Link} from "react-router-dom";
import './styles.css'
import img from './images/RaceHunter_Gradient_Logo.png';

export default function Navbar(){
     
    const[query,setQuery] = useState("");
    console.log(query)
    return (
      <div>
         <header>
            
         <Link className='linkimage' to="/"> <img  className = 'image' src = {img}/></Link> 
            {/* <img  className = 'image' src = {img}/>  */}
            <div className='Anazitisi'>
                <input 
                    className = "texting" 
                    type = "text" 
                    placeholder='Αναζήτηση αγώνα ή τοποθεσίας'
                    onChange={(e => setQuery(e.target.value))}/>
                    <button className='search-button'>Αναζήτηση</button>
                
            </div>
            <div className='Extra'>
                <span><Link to="./Marathon's_Page/App"><button className='Home'>Aρχική</button> </Link> </span>
                <span><button className='LogIn'>Σύνδεση</button></span>
            </div>
        </header>
      </div>
       
    )
}
