import React from 'react';

const Subscribe = () => {
    return (
        <div className="w-[300px] h-[300px] mt-10 relative font-serif sm:w-[500px] md:w-[700px] md:mt-16 lg:w-[1000px] overflow-x-hidden xl:w-[1280px] overflow-x-hidden xxl:w-[1500px]
      ">

     <div className="bg-white relative w-[300px] h-[200px] px-2 shadow-lg  sm:px-28 sm:w-[500px] md:overflow-hidden
     text-center md:flex  md:w-[680px] md:mx-2 md:rounded-lg  md:h-[150px] md:pt-5 lg:w-[880px] lg:mx-16 lg:h-[200px] lg:pt-10 xl:w-[1100px] xl:h-[230px] xl:mx-20 xxl:w-[1300px] xxl:mx-24" data-aos="fade-up"
     data-aos-duration="800"  data-aos-delay="300" >

         <div className="w-40 h-40 rounded-full bg-amber-300 absolute -m-16 sm:w-60 sm:h-60 sm:-my-36 sm:-mx-44 lg:-mx-32 lg:-my-28 "></div>

         <div className=" py-5 absolute z-50 md:-ml-24 lg:-ml-12 xl:py-8">

             <h2 className="text-lg font-bold sm:text-xl lg:text-2xl xl:text-3xl xxl:text-4xl">Subscribe to my Newsletter</h2>
             <p className="text-xs mt-3  md:mt-2 md:text-[12px]
              md:shrink-0 lg:text-[14px] xl:text-[17px] xl:mt-3 xxl:text-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
         </div>

         <div className="text-[12px] mt-28 text-white md:mt-7 absolute md:ml-[280px] lg:ml-[440px] xl:ml-[550px] xl:mt-10 xl:text-[17px] xxl:text-[20px] xxl:ml-[650px]">
             <input type="text" placeholder="Input Your Eamil Address" className="w-[280px] pl-2 py-2 bg-transparent border border-amber-300 border lg:w-[300px] lg:h-10 xl:w-[380px] xl:h-12 xxl:w-[450px]"></input>
                 <button className=" py-[7px] px-2 bg-amber-300 absolute -ml-[71px] cursor-pointer mt-0.5 lg:h-[36px] xl:h-[44px] xl:-ml-[93px] xxl:-ml-[107px] xxl:h-[42px] xxl:mt-0.5">Subscribe</button>
             
                 
             
         </div>

     </div>
            
        </div>
    );
};

export default Subscribe;