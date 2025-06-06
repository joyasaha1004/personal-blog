import React from 'react';
import web_development from "../Assets/web_development.png";
import web_design from "../Assets/web_design.png";
import ux_design from "../Assets/ux_design.png"
import animation_library from "../Assets/animation_libraries.png"
  

const service=[{

    img:web_development,
    title:"Web Development",

},
{

    img:web_design,
    title:"Web Designer",

}, 
{

    img:ux_design,
    title:"UI/UX Designer",

},
{

    img:animation_library,
    title:"Animation Libraries",
},

]

    const Service = () => {
     
    return (
       
       <div className="w-full font-serif overflow-x-hidden md:pt-16">
  <div className="max-w-screen-xl mx-auto px-4">
    <h1 className="text-center text-amber-300 font-bold text-3xl md:text-4xl lg:text-5xl" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
      My Services
    </h1>

    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:mt-12 lg:mt-16 2xl:mt-20">
      {service.map((data) => (
        <div className="group pb-6" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="400">
          <div className="relative">
            <img src={data.img} alt="" className="w-full h-40 rounded-lg brightness-[0.3] lg:h-60 xl:h-72 2xl:h-80" />
            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-base text-white whitespace-nowrap text-center lg:text-2xl xl:text-3xl opacity-100 group-hover:opacity-0 transition-opacity duration-300">
              {data.title}
            </p>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="border border-amber-300 p-3 text-white rounded service-list">
                <span className="text-white hover:text-amber-400 text-base lg:text-lg xl:text-xl">Read More</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>


     
        </div>
    );
};

export default Service;