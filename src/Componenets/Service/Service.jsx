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
        <div className="w-[300px] sm:w-[500px] md:w-[700px] lg:w-[1000px] font-serif overflow-x-hidden xl:w-[1280px] xl:mt-10 xxl:w-[1500px] xxl:mt-16">
       
       <div className="">
           <h1 className="text-center text-amber-300 font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl xxl:text-5xl"data-aos="fade-up"
                  data-aos-duration="800"  data-aos-delay="300"  >My Services</h1>
       </div>

       <div className="mt-10 sm:grid grid-cols-2 lg:mt-16 xl:ml-28 xxl:mt-24"    >
           {service.map((data)=>(

               <div className="px-8  group mb-10 sm:px-4 md:px-6 lg:px-10 xl:px-0"
               data-aos="zoom-in"
               data-aos-duration="800"  data-aos-delay="400" 
               >
               
                  <div className="relative ">
                      <img src={data.img} alt="" className="rounded-lg brightness-[0.3] w-[250px] h-[150px] md:w-[300px] md:h-[180px] lg:w-[400px] lg:h-[220px] xl:w-[450px] xl:h-[250px] xxl:w-[550px] xxl:h-[280px] "/>
                    
                 
                      <p className="text-center absolute inset-x-0 top-16 text-white group-hover:hidden md:top-20 lg:text-2xl lg:top-24 lg:-ml-3 xl:-ml-28 xl:top-28 xxl:text-4xl xxl:-ml-32 xxl:top-32">{data.title}</p>
                      </div>

                      <div className="border border-amber-300 w-[200px] h-[100px] mx-5 -my-[125px] absolute invisible sm:w-[180px] md:w-[250px] md:h-[120px] md:-my-[150px] md:mx-6 group-hover:visible service-list group/edit lg:w-[300px] lg:h-[150px] lg:mx-12 lg:-my-[180px] xl:w-[350px] xl:h-[180px] xl:-my-[215px] xxl:w-[470px] xxl:h-[200px] xxl:-my-[240px] xxl:mx-10">
                          <span className="text-amber-300 absolute inset-x-[60px] top-10 w-full sm:inset-x-[50px] md:inset-x-[85px] md:top-12 hover:text-white lg:text-xl lg:inset-x-[100px] lg:top-[60px] xl:text-2xl xl:inset-x-[120px] xl:top-[75px] xxl:text-4xl xxl:inset-x-[140px] xxl:top-[80px]" >Read More</span>
                      </div>
               
</div>
             
           ))}
       </div>
        </div>
    );
};

export default Service;