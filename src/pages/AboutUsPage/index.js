import React, {useState} from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Hero from '../../assets/banner-img.png'
import Feat1 from  '../../assets/feat1.png';
import Feat2 from  '../../assets/feat2.png';
import member from '../../assets/member.png';
import './about-us-page.css';


export default function App() {

  const[query,setQuery] = useState("");
    console.log(query);
  return (
      <div className='main'>
        
        
          <Navbar />
          
            <section className='hero' >
                <img src={Hero}className='hero-img' />
                <div className='frame'> 
                    <h1 className='title'>Ποιοι είμαστε;</h1>
                </div> 
            </section>

    
           <section className='features'>
              <div className='feature1'>
                <span className='description'>
                    <h1 className='header'>Insert Title Here</h1>
                    <p className='info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis fermentum justo. Sed finibus accumsan lobortis. In hac habitasse platea.</p>
                </span>
                <img src={Feat1}/>
              </div>

              <div className='feature2'>
                <img src={Feat2}/>
                <span className='description'>
                    <h1 className='header'>Insert Title Here</h1>
                    <p className='info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis fermentum justo. Sed finibus accumsan lobortis. In hac habitasse platea.</p>
                </span> 
              </div>
            </section>

            <section className='team'>
                <h1 className='header'>Γνώρισε την ομάδα</h1>
                <div className='member-icons'>
                    <img src={member}/>
                    <img src={member}/>
                    <img src={member}/>
                    <img src={member}/>
                    <img src={member}/>
                </div>
            </section>
             
            <Footer />
        </div>
  )
  
}
