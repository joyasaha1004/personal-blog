import React from 'react';

const Subscribe = () => {
    return (
        <div className=" mt-10 mb-20 w-full h-fit font-serif md:mt-16 overflow-hidden md:px-2 xl:px-6">
 <div className="max-w-screen-xl mx-auto ">

     <div className="bg-white relative  lg:items-center shadow-lg h-48  w-full  text-center sm:h-40 md:flex  md:rounded-lg py-5 lg:pt-10 overflow-hidden lg:h-44"
     data-aos="fade-up"
      data-aos-duration="800"  data-aos-delay="300" 
     >

         <div className="w-40 h-40 z-10 text-xs rounded-full bg-amber-300 absolute -left-16 -top-16"></div>

         <div className="px-2 absolute left-0 right-0 z-50 lg:grid grid-cols-3 lg:px-4 lg:gap-2">


      <div className=' text-xs lg:col-span-2 lg:text-start lg:text-base xl:text-lg'>
             <h2 className="text-lg font-bold sm:text-xl lg:text-2xl  2xl:text-3xl">Subscribe to my Newsletter</h2>
             <p className=" mt-3 mb-5 md:mt-2 lg:flex flex-wrap xl:mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
               <div className="justify-self-center text-xs text-gray-400  relative text-center flex mt-2 bg-white w-full mx-6 sm:w-64 lg:w-64 h-7 xl:w-80 sm:h-7 md:h-8 lg:h-10">
               <input type="text" className="text-xs  w-full text-center border-2 border-amber-500 lg:text-base   lg:w-72  xl:text-xl " placeholder="Input your email"></input>
              <i class="ri-mail-line absolute right-0 p-1 text-white bg-amber-500 text-sm lg:text-base md:p-1.5 lg:p-2"></i>
              </div>
         </div>

       

     </div>
            
        </div></div>
    );
};

export default Subscribe;