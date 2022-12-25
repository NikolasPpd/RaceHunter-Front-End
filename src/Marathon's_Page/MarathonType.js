import React, { useState } from 'react';


export default function MarathonType(){

   //Marathon's distance[Μήκοι Διαδρομής Μαραθωνίων]
  const [TypeMarData,setTypeMarData] = useState({Onekm:false,Twokm:false,
         Tenkm:false,semMar:false,Marathon:false})

   //States for each marathon[Πλήθος μαραθωνίων στα φίλτρα]
    const[one,setOne]=useState(0)
    const[two,setTwo]=useState(0)
    const[ten,setTen]=useState(0)
    const[sem,setSem]=useState(0)
    const[Mar,setMar]=useState(0)


    //Αναζήτηση και εμφάνιση πλήθους μαραθωνίων με συγκεκριμένο φίλτρο
    function Marathons(){
    return 
    }


    //Marathon's distance Event Handling
    function Handling(event){
            const {name,type,value,checked} = event.target
            setTypeMarData(MarDistanceData => {
                    return{
                        ...MarDistanceData ,[name] : type === "checkbox" ? checked : value
                    }
            })

    }


return (
 <div>
    <form>
        <br/> 
        <p>Μήκος Διαδρομής</p>
        <br/> 
          <input
            type = "checkbox"
            id="Onekm"
            checked = {TypeMarData.Onekm}
            onChange={Handling}
            name = "Onekm"
          />
          <label>1Km ({one})</label>
          <br/>  
          <input
            type = "checkbox"
            id="Twokm"
            checked = {TypeMarData.Twokm}
            onChange={Handling}
            name = "Twokm"
          />
          <label>2Km ({two})</label> 
           <br/>  
          <input
            type = "checkbox"
            id="Tenkm"
            checked = {TypeMarData.Tenkm}
            onChange={Handling}
            name = "Tenkm"
          />
          <label>10Km ({ten})</label> 
           <br/>  
          <input
            type = "checkbox"
            id="semMar"
            checked = {TypeMarData.SemMar}
            onChange={Handling}
            name = "semMar"
          />
          <label>Ημιμαραθώνιος ({sem})</label> 
           <br/> 
          <input
            type = "checkbox"
            id="Marathon"
            checked = {TypeMarData.Marathon}
            onChange={Handling}
            name = "Marathon"
          />
          <label>Μαραθώνιος ({Mar})</label>  
    </form>
      
    <br/> 
</div>
)

}