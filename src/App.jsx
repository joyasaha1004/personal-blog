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
      offset: 200,  // Offset from the original trigger point
      duration: 800,  // Animation duration
      easing: 'ease-in-out',  // Easing function
      once: true,  // Whether animation should happen only once
      mirror: false,  // Whether elements should animate out while scrolling past them
    })
  })

 
  return (
    <div className="absolute overflow-x-hidden">
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
