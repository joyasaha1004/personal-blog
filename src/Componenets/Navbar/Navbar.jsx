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
    
      <div className="w-[300px] overflow-hidden relative sm:w-[500px] md:w-[700px] lg:w-[1000px] xl:w-[1280px] xxl:w-[1510px] ">
     

          {/* <nav className="p-5 backdrop-blur-lg bg-white/30 border-b  border-white/20  ">
              <div>

                  <h2 className="text-[20px] font-sans font-bold text-amber-400 lg:text-[26px] xl:text-[32px] xxl:text-[38px]">JSaha</h2>
                  <i className="ri-menu-line lg:invisible " ></i> 

              </div>
          </nav> */}


        
            <nav className="backdrop-blur-lg bg-white/30  border-b  border-white/20
             h-[50px] lg:h-[60px] xl:h-[70px] xxl:h-[80px]">

              <div className="flex space-x-52 sm:space-x-96 px-3 sm:px-5 py-3 md:space-x-[590px] md:px-5 xxl:px-8">

             
                   <h2 className="text-[20px] font-sans font-bold text-amber-400 lg:text-[26px] xl:text-[32px] xxl:text-[38px]">JSaha</h2>
                   <i className="ri-menu-line lg:invisible " onClick={toggleMenu} ></i>

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

           
              </div>
              </nav>
             
 
              {isMenuOpen ? (

   <div className="full bg-white text-black  w-[200px] h-[550px] py-20 px-6 
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

           <i className="ri-close-line text-lg top-3 right-4 absolute" onClick={cross}></i>
      </div>
    


              ):null}
              
  
        </div>


    );
};

export default Navbar;