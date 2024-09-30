import React from 'react';
import "./Work.css";
import {useRef,useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import web_project1 from "../Assets/web_project1.png"
import web_project2 from "../Assets/web_project2.png"
import web_project3 from "../Assets/web_project3.png"
import web_project4 from "../Assets/web_project4.png"
import web_project5 from "../Assets/web_project5.png"
// import web_project6 from "../Assets/web_project6.png"

import web_design1 from "../Assets/web_design1.png"
import web_design2 from "../Assets/web_design2.png"
import web_design3 from "../Assets/web_design3.png"
import web_design4 from "../Assets/web_design4.png"
import web_design5 from "../Assets/web_design5.png"
import web_design6 from "../Assets/web_design6.png"

import ux_project1 from "../Assets/ux_project1.png"
import ux_project2 from "../Assets/ux_project2.png"
import ux_project3 from "../Assets/ux_project3.png"
import ux_project4 from "../Assets/ux_project4.png"
import ux_project5 from "../Assets/ux_project5.png"
import ux_project6 from "../Assets/ux_project6.png"

import animation_project1 from "../Assets/animation_project1.png"
import animation_project2 from "../Assets/animation_project2.png"
import animation_project3 from "../Assets/animation_project3.png"
import animation_project4 from "../Assets/animation_project4.png"
import animation_project5 from "../Assets/animation_project5.png"
import animation_project6 from "../Assets/animation_project6.png"

const Work = () => {

    
    
        const [activeSlide, setActiveSlide] = useState(0);
        const sliderRef = useRef(null);
          
        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          afterChange: current => setActiveSlide(current),
          appendDots: dot => (
            <div>
              <ul >{dot} </ul>
            </div>
          ),
           customPaging: i => (
            
          <div style={{width:"30px",color:"orange",}}></div>
           
             ) 
        };

    const handleListItemClick = index => {
        setActiveSlide(index);
        sliderRef.current.slickGoTo(index);
    } ;
     

    return (
        <div className="w-[300px] relative font-serif overflow-hidden pt-[80px] sm:w-[500px] md:w-[700px] lg:w-[1000px] xl:w-[1280px] xl:mb-80 xxl:w-[1500px]  xl:mt-10 xxl:mt-16">

<div className="">
           <h1 className="text-center text-amber-300 font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl xxl:text-5xl"data-aos="fade-up"
                  data-aos-duration="800"  data-aos-delay="300"  >My Work</h1>

           <div>
               <ol className="list grid grid-cols-2 mt-4 sm:grid-cols-3 sm:mb-3 sm:mt-6 md:flex md:ml-44 md:mt-8 lg:ml-[340px] lg:mt-10 xl:ml-[450px] xl:mt-16 xxl:ml-[500px] xxl:mt-20 " data-aos="fade-up"
                  data-aos-duration="800"  data-aos-delay="400" >
                   <li onClick={() => handleListItemClick(0)}>All</li>
                   <li onClick={() => handleListItemClick(1)}>We Development</li>
                   <li onClick={() => handleListItemClick(2)}>Web Design</li>
                   <li onClick={() => handleListItemClick(3)}>UI/UX Design</li>
                   <li onClick={() => handleListItemClick(4)}>Animation</li>
               </ol>
           </div>

           <div className="xxl:mt-10">
           <Slider {...settings} ref={sliderRef}>

<div >
   <div className="grid grid-cols-2 gap-4 px-2 sm:grid-cols-3 md:px-4 xxl:gap-6">
    
     <img src={ux_project1} className="imglist"   data-aos="fade-right"
                  data-aos-duration="1000"  data-aos-delay="500" ></img>
     <img src={web_design1} className="imglist"  data-aos="fade-right"
                  data-aos-duration="900"  data-aos-delay="400" ></img>
     <img src={web_project2} className="imglist"  data-aos="fade-right"
                  data-aos-duration="800"  data-aos-delay="300" ></img> 
     <img src={web_project5} className="imglist"data-aos="fade-right"
                  data-aos-duration="1000"  data-aos-delay="400" ></img>
      <img src={animation_project3} className=" imglist" data-aos="fade-right"
                  data-aos-duration="900"  data-aos-delay="300"></img>
      <img src={ux_project3} className="imglist"  data-aos="fade-right"
                  data-aos-duration="800"  data-aos-delay="200"></img>
         
     <img src={web_design3} className="imglist"  data-aos="fade-right"
                  data-aos-duration="1000"  data-aos-delay="400"></img>
     <img src={animation_project6} className="imglist" data-aos="fade-right"
                  data-aos-duration="900"  data-aos-delay="300" ></img>
   

 </div>


           </div>

           <div>
                       <div className="grid grid-cols-2 gap-4 px-2 sm:grid-cols-3  xxl:px-4 xxl:gap-6">
                         <img src={web_project1} className="imglist"></img>
                         <img src={web_project2} className="imglist"></img>
                         <img src={web_project3} className="imglist"></img>
                         <img src={web_project4} className="imglist"></img>
                         <img src={web_design5} className="imglist"></img>
                        <img src={web_project3} className="imglist"></img>                        
                        
                     </div> 
                       </div> 

                       <div>
                       <div className="grid grid-cols-2 gap-4 px-2 sm:grid-cols-3  xxl:px-4 xxl:gap-6">
                         <img src={web_design1} className="imglist"></img>
                         <img src={web_design2} className="imglist"></img>
                         <img src={web_design3} className="imglist"></img>
                         <img src={web_design4} className="imglist"></img>
                         <img src={web_design5} className="imglist"></img>
                        <img src={web_design6} className="imglist"></img>                        
                        
                
                     </div> 
                       </div>           

                       <div>
                       <div className="grid grid-cols-2 gap-4 px-2 sm:grid-cols-3  xxl:px-4 xxl:gap-6">
                         <img src={ux_project1} className="imglist"></img>
                         <img src={ux_project2} className="imglist"></img>
                         <img src={ux_project3} className="imglist"></img>
                         <img src={ux_project4} className="imglist"></img>
                         <img src={ux_project5} className="imglist"></img>
                        <img src={ux_project6} className="imglist"></img>                        
                          
                     </div> 
                       </div> 

                  <div>
                       <div className="grid grid-cols-2 gap-4 px-2 sm:grid-cols-3  xxl:px-4 xxl:gap-6">
                         <img src={animation_project1} className="imglist"></img>
                         <img src={animation_project2} className="imglist"></img>
                         <img src={animation_project3} className="imglist"></img>
                         <img src={animation_project4} className="imglist"></img>
                         <img src={animation_project5} className="imglist"></img>
                        <img src={animation_project6} className="imglist"></img>                        
                        
                       </div> 
                       </div>  
                    
             
           
            </Slider>
       </div>
        </div>
        </div>
    );
};

export default Work;