import React, { useRef, useState } from 'react'
import '../App.css'

const Weather = () => {
    const ip = useRef()
    const [weatherdetails,setweatherdetails] = useState(null) 
    const report=()=>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ip.current.value}&appid=85d8f5cc4c850426a6752d6f0b5305a0`)
        .then(result=>result.json()) 
        .then(data=>setweatherdetails(data))
    }
  return (
    <div className='container1'>
      
      
    {
     
    <div>
    <input ref={ip} placeholder='ENTER YOUR CITY'></input>
    <button onClick={report}>GET WEATHER</button>
    </div>
}
    {
        weatherdetails?
        <div className='container'>
        <li>YOUR CITY'S WEATHER IS:{weatherdetails.weather[0].description}</li>
        <li>YOUR CITY'S TEMPERATURE IS:{weatherdetails.main.temp}</li>
        <li>HUMIDITY:{weatherdetails.main.humidity}</li>
        </div>:""

        
       
    }
     </div>
    
  )
}

export default Weather
