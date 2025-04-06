import React from 'react';
import "./Choice_Me.css"
import personal_dp from "../Assets/personal_dp2.png"

const Choice_Me = () => {
    return (   
        
        <div className="w-full overflow-hidden h-fit mt-20 mb-20">

            <div className='bg-white pt-6 font-serif sm:rounded-lg sm:shadow-lg mx-2 pb-6 md:mx-4 lg:grid grid-cols-2 md:px-2 lg:px-4 lg:pt-10 lg:pb-10 xl:mx-6 xl:pt-12 xl:pb-12 xxl:mx-8'>



            <div className='w-56 h-56 border-4 rounded-full  sm:shadow-lg bg-amber-400 justify-self-center border-white overflow-hidden md:w-48 md:h-48 md:self-center lg:w-60 lg:h-60 xl:w-64 xl:h-64'>
                            <img src={personal_dp} className="relative  object-cover h-60 lg:h-64 xl:h-72"></img> 
                           </div>   

          


                  <div className="pb-5  pt-4">
            <div className=" px-5  ">
                <h1 className="text-amber-400 text-xl font-bold sm:text-2xl lg:text-3xl xl:text-4xl xxl:text-4xl " data-aos="fade-up"
                  data-aos-duration="600"  data-aos-delay="300" >Why choose me?</h1>
               
            </div>
             <div className="">
                
                <div>
                    <ul className=" marker:text-amber-400 list-disc relative left-3 px-3 space-y-4 sm:left-5 reason-list pt-4 xl:pt-6">
                        <li data-aos="fade-up"
                  data-aos-duration="600"  data-aos-delay="400" >Resposive & Mobile Fast Design</li>
                        <li data-aos="fade-up"
                  data-aos-duration="600"  data-aos-delay="500" >Always update myself with new technology</li>
                        <li data-aos="fade-up"
                  data-aos-duration="600"  data-aos-delay="500" >Provide Customized Solution</li>
                        <li data-aos="fade-up"
                  data-aos-duration="600"  data-aos-delay="500" > Create enteractive and attractive Feature</li>
                    </ul>
                </div>
            </div></div> 
        </div></div>
    );
};

export default Choice_Me;