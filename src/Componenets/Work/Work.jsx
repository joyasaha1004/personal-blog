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
        <div className="relative font-serif overflow-hidden w-full pt-12 lg:pt-20 xl:pt-36">

<div className="pb-7">
           <h1 className="text-center text-amber-300 font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
        data-aos="fade-up"
                data-aos-duration="800"  data-aos-delay="300" 
                   >My Work</h1>

           <div>
               <ol className="list grid grid-cols-2 pt-10 sm:grid-cols-3  md:grid-cols-4 lg:pt-16 lg:flex flex-wrap lg:justify-self-center lg:gap-8 xl:gap-16" 
            data-aos="fade-up"
                data-aos-duration="800"  data-aos-delay="400" 
                  >
                   <li onClick={() => handleListItemClick(0)}>All</li>
                   <li onClick={() => handleListItemClick(1)}>We Development</li>
                   <li onClick={() => handleListItemClick(2)}>Web Design</li>
                   <li onClick={() => handleListItemClick(3)}>UI/UX Design</li>
                   <li onClick={() => handleListItemClick(4)}>Animation</li>
               </ol>
           </div>

           <div className="mt-4 xl:mt-8 xxl:mt-10">
           <Slider {...settings} ref={sliderRef}>

<div >
   <div className="grid grid-cols-2 gap-4 px-2 sm:grid-cols-3 md:px-4 ">
    
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