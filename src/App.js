import { useState } from 'react';
import './App.css';
import Card from './Components/Card';
function App() {
  const [link ,setlink]=useState({})
  const [loading ,setloading]=useState(true);
  const  submit = async()=>{
    const api_key = "d40ee4345cc59b4c49288834876f49a8";
    const place = document.getElementById("search").value;
      if(place===""){
        return alert("Enter the Correct Place");
      }
    let url =`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${api_key}`;
     let response = await fetch(url);
     const data = await response.json(); 
     setlink(data);
     setloading(false);
     console.log(data);
   // document.getElementById("content").innerHTML="name of City="+"  "+data.name+"<br> "+"temparature="+data.main.temp+" <br>"+"Humidity="+data.main.humidity;
  }

  return (
    <>
     <div>
      <h1>Weather App</h1>
      <input type="text" id='search' placeholder='Search the Place' />
      <button onClick={submit} >Submit</button>
      <div className='shadow' id='content'>
      </div>
    </div>
    {
      loading ? (
        <h4>Just Search the place</h4>
      ):(
        <Card add={link}/>
      )
    }
     
    </>
  );
}

export default App;
