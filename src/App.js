import './App.css';
import React from 'react';
import { useState } from 'react';

function App(){
  const [islit, setlit ] = useState(true);
  const state = React.useState(true);
  const isLit = state[0];
  const setLit = state[1];
  const brightness = isLit ? "lit" : "dark";

  
  var CityName =[{CityName:"Kashmir",Tempreture:"20%",Perception:"3",Humadity:"20"},
                 {CityName:"Karachi",Tempreture:"30%",Perception:"15",Humadity:"17"},
                 {CityName:"Lahore",Tempreture:"15%",Perception:"7",Humadity:"23"},
                 {CityName:"Multan",Tempreture:"25%",Perception:"5",Humadity:"33"},
                 {CityName:"Islamabad",Tempreture:"13%",Perception:"9",Humadity:"21"}]


return (
<>
<div className={`room ${brightness}`}>
     {isLit }
    <br />
    <p onClick={() => setLit(!isLit)}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Perspective-Button-Stop-icon.png" height="25px" />
    </p>
  


<div className="Abh">

<div className="header"><h1>Hello World</h1></div>

 {CityName.map((eachcity)=>{

   return <div className="eachCity">
     <div>
   <h2> 
     Name:{eachcity.CityName}
   </h2>
   </div>
   <div>
     <h3>
       Temprature:{eachcity.Tempreture}
     </h3>
   </div>
   <div>
     <h3>
       Perception:{eachcity.Perception}
     </h3>
   </div>
   <div>
     <h3>
       Humadity:{eachcity.Humadity}
     </h3>
   </div>
   
 
   </div>


 })}

<div className="footer"><h1>Hello Footer</h1></div>
</div>
</div>
</>
)
}
export default App
