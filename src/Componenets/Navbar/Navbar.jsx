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
       
<div className=" w-[300px]  overflow-x-hidden relative sm:w-[500px] md:w-[700px] lg:w-[1000px] xl:w-[1280px] xxl:w-[1500px] ">
             <div className=" relative">
               
            <nav className=" backdrop-blur-lg bg-white/30 border-b  border-white/20 z-50 fixed top-0 w-[300px]  h-[50px]  sm:w-[500px] md:w-[700px] lg:w-[1000px] lg:h-[60px] xl:w-[1280px] xl:h-[70px] xxl:w-[1500px] xxl:h-[80px] ">
              <div className="flex space-x-52 m-2.5 w-[300px] sm:w-[500px] sm:space-x-96 sm:mx-4 md:space-x-[580px] absolute  xl:mx-8 xxl:mx-9">

                   <h2 className="text-[20px] font-sans font-bold text-amber-400 lg:text-[26px] xl:text-[32px] xxl:text-[38px]">JSaha</h2>
                   <i className="ri-menu-line lg:invisible" onClick={toggleMenu}></i>

              </div>
     <div className="invisible full lg:visible lg:mt-40 lg:absolute lg:font-serif lg:flex lg:-top-36 lg:gap-12 lg:px-[490px] xl:px-[720px] xxl:-top-[140px] xxl:gap-20" 
     
     >
               
 
               <h4 className="" data-aos="fade-up"
                  data-aos-duration="800"  data-aos-delay="300">Home</h4>
              <h4 className="" data-aos="fade-up"
                  data-aos-duration="800"  data-aos-delay="400" >Services</h4>
              <h4 className="" data-aos="fade-up"
                  data-aos-duration="800"  data-aos-delay="500" >Work</h4>
              <h4 className="" data-aos="fade-up"
                  data-aos-duration="800"  data-aos-delay="600" >Blog</h4>

           
              </div></nav>
              </div>
 
              {isMenuOpen ? (

   <div className="full bg-white text-black  w-[200px] h-[550px] py-16 px-4 
    font-bold font-serif  right-0   z-50 fixed lg:hidden"
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

           <i className="ri-close-line text-lg top-3 right-4 absolute" onClick={cross}></i>
      </div>
    


              ):null}
              
  
        </div>


    );
};

export default Navbar;