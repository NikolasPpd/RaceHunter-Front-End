import React from 'react'
import Footer from './components/Footer'
import Marathons from './components/Marathons'
import "./styles.css"
import axios from "axios"

function App() {



      const [marathons, setMarathons] = React.useState([])


      React.useEffect(() =>{
        axios.get("https://api.imgflip.com/get_memes")
        .then(res => setMarathons(res.data.data.memes))
        .catch(err => console.error(err))
}, [marathons])
      
      
    
    const allmars = marathons.map(mar => {
        return(
            <Marathons key = {mar.id} {...mar}/>
        )
    })

 
  return (
    <div className='container'>
      <div className='nav'></div>
      <div className='marathons-page'>
        <div className='filters'></div>
        <div className='all-marathons'>
                  {allmars}
          </div>
      </div>
        <Footer/>
    </div>
  )
}

export default App