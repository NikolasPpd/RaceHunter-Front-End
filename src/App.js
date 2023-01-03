import React from 'react'
// import * as ReactDOM from 'react-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RacesPage from "./pages/RacesPage";
import './assets/styles.css';


export default function App() {

  return (
      <div className='main'>
        
        
          <Navbar />
          
           <div className='hero'>
          
               <div className='frame'> 
                 <br></br>
                 <br></br>

                <h1 className='title'>Όλοι οι αγώνες σε ένα σημείο!</h1>
                <h4 className='subtitle'>Η #1 πλατφόρμα αναζήτησης αγώνων δρόμου στην Ελλάδα!</h4>

                <div className='ActionBtns'>
                  <button className='CTAbtn' > Δες τους αγώνες </button>
                <button className='LearnMorebtn'>Μάθε περισσότερα</button>
                </div>
      
               </div>
               
             </div>
            {/*<RacesPage/>*/}
             
            <Footer />
      </div>
  )
  
}

