import React from 'react';
import personal_dp from "../Assets/personal_dp2.png"


const Hero_Section = () => {
    return (
     
          

       <div className="bg-amber-300 overflow-x-hidden w-full h-fit pt-20 pb-10 z-30 md:grid grid-cols-2 md:pt-12 xl:pt-20 xl:pb-16 xl:px-10">

        
        <div className='w-56 h-56 border-4 rounded-full bg-white justify-self-center border-white overflow-hidden md:w-48 md:h-48 md:self-center lg:w-60 lg:h-60 xl:w-64 xl:h-64'>
                 <img src={personal_dp} className="relative  object-cover h-60 lg:h-64 xl:h-72"></img> 
                </div> 
              
       
       <div className=" px-2 pt-7 text-xs sm:pt-10 md:pt-6 lg:text-base xl:text-lg">

                  <h1 className=" font-satisfy text-2xl text-amber-500 mb-3  sm:text-3xl
                lg:text-4xl xl:mb-6 xxl:text-5xl"
                  data-aos="fade-up"
                  data-aos-duration="800"  data-aos-delay="700" >I'm glad you're here!</h1>
                  <span className="font-serif text-white leading-relaxed md:leading-loose"  data-aos="fade-up"
                  data-aos-duration="900"  data-aos-delay="800">I'm Joya Saha. I'm freelance as a front end developer based in Bangladesh. I'll serve you impressive and celestial web application through polished design and organized code.</span><br></br>

                  <button className="p-2 mt-4 rounded-md text-amber-500 font-serif bg-white  lg:p-3 hover:text-white hover:bg-amber-500">Contact Now</button>
              </div>


             
             
{/*    
   
            <div className="w-48 h-48 border-4 border-white justify-self-center items-center rounded-xl relative rotate-45 items-center">    */}

 
             {/* </div> */}
             {/* <img src={personal_dp} className="relative self-center -rotate-45 object-cover relative h-60 "></img>  */}
             {/* <div className="rounded-xl rotate-45 self-center relative left-20 -top-7 right-0  w-28 h-28 border-r-4 border-b-4 items-center overflow-hidden border-white transform rotate-45 shadow-sm ">
                 
            

             </div> */}
             
            
         

           
              
             
       
             </div>
        
    );
};
export default Hero_Section;