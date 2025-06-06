import React from 'react';
 import "./Navbar.css";
  import {useState} from "react"

const Navbar = () => {

    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = ()=>{
        setMenuOpen(!isMenuOpen)
        Other.current.classList.add("hidden")
    }
    console.log(isMenuOpen)

    const cross = ()=>{
        setMenuOpen(!isMenuOpen)
        toggleMenu.current.classList.remove("hidden")
    }

    return (
    
      <div className="overflow-x-hidden w-full relative">
        
        <div className="max-w-screen-xl mx-auto">
   
            <nav className="backdrop-blur-lg overflows-hidden bg-white/30 h-fit p-2 border-white/20 sm:px-4 lg:flex lg:grid grid-cols-3 lg:px-4 xl:px-7
            ">

              <div className="flex justify-between font-bold">

                   <h2 className="font-sans  text-amber-400 text-lg sm:text-xl lg:text-2xl xl:text-3xl">JSaha</h2>
                   <i className="ri-menu-line lg:invisible " onClick={toggleMenu} ></i>

             </div> 
     <div className="hidden full relative lg:block lg:font-serif   lg:items-center "> 
     
           <div className='lg:col-span-2 lg:gap-16 xl:gap-20 lg:flex lg:justify-self-center'>
               <h4 className="" data-aos="fade-up"
                  data-aos-duration="800"  data-aos-delay="300">Home</h4>
              <h4 className="" data-aos="fade-up"
                  data-aos-duration="800"  data-aos-delay="400" >Services</h4>
              <h4 className="" data-aos="fade-up"
                  data-aos-duration="800"  data-aos-delay="500" >Work</h4>
              <h4 className="" data-aos="fade-up"
                  data-aos-duration="800"  data-aos-delay="600" >Blog</h4>

           
              </div></div>
              </nav>
             
 
              {isMenuOpen ? (

   <div className="full nav-list bg-white text-black w-60 py-28  pb-72 text-center
    font-bold font-serif -top-2 right-0 z-50 fixed lg:hidden"
    data-aos="fade-left"
    data-aos-duration="900"  data-aos-delay="400"
    >
               
 
         <h4 className=""  data-aos="fade-left"
      data-aos-duration="900"  data-aos-delay="500">Home</h4>
        <h4 className=""  data-aos="fade-left"
      data-aos-duration="900"  data-aos-delay="600">Services</h4>
            <h4 className=""  data-aos="fade-left"
      data-aos-duration="900"  data-aos-delay="700">Work</h4>
       <h4 className=""  data-aos="fade-left"
      data-aos-duration="900"  data-aos-delay="800">Blog</h4>

           <i className="ri-close-line text-base top-4 right-4 absolute" onClick={cross}></i>
      </div>
    


              ):null}
              
  
        </div></div>


    );
};

export default Navbar;