import React from 'react';
import personal_dp from "../Assets/personal_dp2.png"


const Hero_Section = () => {
    return (
     
        <div className="bg-amber-300 w-[300px] h-[550px] overflow-x-hidden  z-30 sm:w-[500px] sm:h-[550px] md:flex flex-wrap md:w-[700px] md:h-[400px] lg:w-[1000px] relative lg:h-[500px] xl:w-[1280px] xl:h-[700px]  xxl:w-[1510px] xxl:h-[900px] ">
             
          
            <div className="w-[400px] h-72 bg-white absolute rounded-[70%] my-0.5 -rotate-6 mx-10 overflow-hidden sm:w-[500px] sm:h-80 sm:mx-36 sm:my-1 md:mx-[400px] lg:w-[700px] lg:h-[450px] lg:mx-[600px] xl:w-[850px] xl:h-[600px] xl:mx-[750px] xxl:w-[1000px] xxl:h-[800px] xxl:mx-[900px] xxl:rotate-[-8deg]">  
             <img src={personal_dp} className="w-96 h-[282px] my-5 -mx-5 rotate-3 absolute sm:w-[400px] sm:h-[320px] sm:mx-7 md:mx-3 lg:w-[700px] lg:h-[430px] lg:-mx-28 lg:my-10 xl:w-[800px] xl:h-[550px]
             xl:my-16 xxl:w-[900px] xxl:h-[770px] xxl:-mx-12"></img>
            
             </div>

             <div className="text mt-[340px] px-2 sm:mt-[370px] sm:px-4 md:w-[380px] md:mt-28 md:px-5 lg:w-[500px] lg:mt-36 lg:ml-5 xl:w-[600px] xl:mt-52 xxl:ml-8 xxl:w-[680px] xxl:mt-72">

                 <h1 className=" font-satisfy text-2xl text-amber-500 mb-3  sm:text-3xl
                 lg:text-4xl xl:text-5xl xl:mb-6 xxl:text-6xl"
                  data-aos="fade-up"
                  data-aos-duration="800"  data-aos-delay="700" >I'm glad you're here!</h1>
                 <span className="font-serif text-xs text-white lg:text-base
                 xl:text-xl xxl:text-2xl xxl:leading-loose"  data-aos="fade-up"
                 data-aos-duration="900"  data-aos-delay="800">I'm Joya Saha. I'm freelance as a front end developer based in Bangladesh. I'll serve you impressive and celestial web application through polished design and organized code.</span><br></br>

                 <button className="p-2 rounded-md text-amber-500 font-serif bg-white text-[10px] sm:text-[12px] mt-2 md:mt-5 lg:text-[14px] lg:p-3 xl:text-[19px] hover:text-white hover:bg-amber-500">Contact Now</button>
             </div>
              
                  
       
            
        </div>
    );
};

export default Hero_Section;