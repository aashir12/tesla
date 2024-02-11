import Navbar from "./components/Navbar";
import Model from "./components/Model";
import Data from "./data";
import React, { useEffect, useState } from "react";


function App() {

  const [windowWidth,setWindowWidth]=useState(window.innerWidth)
 useEffect(
 
()=>{
  function Resizer(){
    setWindowWidth(window.innerWidth)
   }
   window.addEventListener('resize',Resizer)



   return ()=>{
    window.removeEventListener('resize',Resizer)
   }
}
 )
  return (
    <>
      <div className="containr">
      <div className="h-screen bg-cover bg-center"  style={{backgroundImage:`url(${windowWidth < 800 ?'Acessories_sm.jpg' :'Accesories_lg.jpg'})`}} >
        <Navbar />
        <Model title='Power Wall' design={'https://www.tesla.com/powerwall/design'}/>
      </div>
      {Data.map((item, index) => (
        <div key={index} className="h-screen bg-cover bg-center" style={{backgroundImage: `url('${windowWidth < 800 ? item.url_sm : item.url_lg}')`}}>
          <Model title={item.title} design={item.design}/>
        </div>
      ))}
      </div>
    </>
  );
}

export default App;
