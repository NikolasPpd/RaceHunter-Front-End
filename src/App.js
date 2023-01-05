import React from 'react'
// import * as ReactDOM from 'react-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from './assets/banner-img.png'
import Feat1 from  './assets/feat1.png';
import Feat2 from  './assets/feat2.png';
import Feat3 from  './assets/feat3.png';
// import RacesPage from "./pages/RacesPage";
import './assets/styles.css';


export default function App() {

  return (
      <div className='main'>
        
        
          <Navbar />
          
          <section className='hero' >
            <img src={Hero}className='hero-img' />
            <div className='frame'> 
              <h1 className='title'>Όλοι οι αγώνες σε ένα σημείο!</h1>
              <h4 className='subtitle'>Η #1 πλατφόρμα αναζήτησης αγώνων δρόμου στην Ελλάδα!</h4>
              <div className='ActionBtns'>
                <button className='CTAbtn'>Δες τους αγώνες</button>
                <button className='LearnMorebtn'>Μάθε περισσότερα</button>
              </div>
      
            </div>
               
          </section>
           <br></br>
           <br></br>
           <br></br>
          

           <section className='features'>
              <div className='feature1'>
                 <span className='description'><h1 className='header' >Όλες οι πληροφορίες για<br></br> τον αγώνα</h1>
                 <p className='info'>Όλες οι πληροφορίες που θα χρειαστείς οργανωμένες σε ένα σημείο για άμεση και εύκολη πρόσβαση</p>
                 </span>
                 <img src={Feat1} id='feat1-img'/>
                 
                 
              </div>

              <div className='feature2'>
                <img src={Feat2} id='feat2-img'/>
                <span className='description'><h1 className='header'>Φίλτρα αναζήτησης</h1>
                <p className='info'>Βρες αγώνες με βάση κριτήρια, όπως η απόσταση, το κόστος συμμετοχής, ο τύπος της διαδρομής και πολλά άλλα</p>
                </span>
                
              </div>

              <div className='feature3'>
               
               <span className='description'>
                  <h1 className='header'>Μοναδικές προσφορές</h1>
                  <p className='info'>Απόκτησε πρόσβαση σε πληθώρα εκπτώσεων και προσφορών για τη συμμετοχή σου σε αγώνες, την αγορά εξοπλισμού, την ενοικίαση καταλυμάτων κ.α.</p>
                </span>
                <img src={Feat3} id='feat3-img'/> 
              </div>
            </section>


            {/* <RacesPage/> */}
             
            <Footer />
      </div>
  )
  
}

