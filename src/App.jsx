import React from "react";

import './App.css'
import Navbar from "../src/Componenets/Navbar/Navbar"
import Hero_Section from './Componenets/Hero_Section/Hero_Section'
import Subscribe from './Componenets/Subscribe/Subscribe'
import Service from "./Componenets/Service/Service"
import AOS from "aos";
import "aos/dist/aos.css";
import Work from "./Componenets/Work/Work";
import Choice_Me from "./Componenets/Choice_Me/Choice_Me";
import My_Blog from "./Componenets/My_Blog/My_Blog";
import Footer from "./Componenets/Footer/Footer";
function App() {

  React.useEffect(()=>{
    AOS.init({
      offset: 200, 
      duration: 800, 
      easing: 'ease-in-out',
      once: true, 
      mirror: false,
    })
  })

 
  return (
    <div className="">
   <Navbar/>
   <Hero_Section/>
   <Subscribe/>
   <Service/>
   <Work/>
   <Choice_Me/>
   <My_Blog/>
   <Footer/>
    </div>
  )
}

export default App
