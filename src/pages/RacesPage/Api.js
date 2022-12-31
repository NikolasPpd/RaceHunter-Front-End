import React from "react";
import Card from "./RaceCard";
import axios from "axios";

export default function Api(){

    const [marathons, setMarathons] = React.useState([])


      React.useEffect(() =>{
        axios.get("https://api.imgflip.com/get_memes")
        .then(res => setMarathons(res.data.data.memes))
        .catch(err => console.error(err))
}, [])
      
      
    
    const allmars = marathons.map(mar => {
        return(
            <Card key = {mar.id} {...mar}/>
        )
    })

 
  return (
  
        <div className='all-marathons'>
                  {allmars}
          </div>
  )
    
}