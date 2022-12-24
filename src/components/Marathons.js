import React from 'react'
import {SlCalender} from "react-icons/sl"
import {ImLocation} from "react-icons/im"
import "./marathons.css"

export default  function Marathons(props) {
  return (
        <div className='marathon-tag'>
        <img src={props.url}  alt='run'></img>
            <div className='tag-elements'>
                <h2 className='marathon-title'>{props.name}</h2>
                <p className='marathons-location'><span className='icons'><ImLocation/></span> {props.name}</p>
                <p className='marathon-date'><span className='icons' ><SlCalender/></span> {props.width}</p>
                <p className='marathon-dist'>{props.height}</p>
                <p className='marathon-pirce'>Από <span className='price'>{props.width}$</span></p>
            </div>
        </div>
    
  )
}

