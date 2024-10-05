import React from 'react';
import "./Choice_Me.css"
import personal_dp from "../Assets/personal_dp2.png"

const Choice_Me = () => {
    return (
      
        <div className="w-[300px] relative overflow-hidden h-[580px] bg-white font-serif mt-[100px]  z-30 sm:w-[500px] sm:h-[590px]  md:flex  sm:mt-[100px] md:w-[700px] md:h-[400px] lg:mt-[180px] lg:w-[1000px] lg:h-[500px] xl:w-[1280px] xl:h-[700px] xxl:w-[1510px]  xxl:h-[800px] mb-5 xxl:mt-[100px]">

            <div className="w-[400px] h-72 bg-amber-400 absolute rounded-[70%] my-0.5 -rotate-6 -mx-40 overflow-hidden sm:w-[500px] sm:h-80 sm:-mx-60 sm:my-1  lg:w-[700px] lg:h-[450px] lg:-mx-80 xl:w-[850px] xl:h-[600px] xl:-mx-[350px] xxl:w-[1000px] xxl:h-[750px] xxl:-mx-[390px]">

            <img src={personal_dp} className="w-96 h-[282px] my-5 mx-16 rotate-3 absolute sm:w-[400px] sm:h-[320px] sm:mx-32 md:mx-40 lg:w-[700px] lg:h-[440px] lg:mx-36  lg:my-10 xl:w-[800px] xl:h-[570px]
             xl:my-16 xxl:w-[900px] xxl:h-[770px] xxl:mx-52"></img>   

            </div>


                  <div className="pb-5 absolute sm:px-8 sm:pt-2 md:mx-72 md:-my-72 w-full lg:mx-[450px] lg:-my-60 xl:mx-[600px] xl:-my-40 xxl:mx-[750px]">
            <div className=" pt-80 px-5 absolute sm:pt-[330px] ">
                <h1 className="text-amber-400 text-2xl font-bold md:text-3xl lg:text-4xl xl:text-5xl xxl:text-6xl" data-aos="fade-up"
                  data-aos-duration="600"  data-aos-delay="300" >Why choose me?</h1>
               
            </div>
             <div className="mt-96 absolute sm:mt-[400px] md:mt-[400px] lg:mt-[420px] xl:mt-[440px]
             xxl:mt-[470px]">
                <div className=" w-40 absolute h-[1px] bg-amber-600 rotate-90 -ml-[61.5px] mt-20 sm:mt-16 sm:-ml-[62.5px] lg:mt-20 lg:-ml-[64px] xl:w-72 xl:h-[2px] xl:-ml-[130px] xl:mt-32 xxl:-ml-[132px]"> </div>
                
                <div>
                    <ul className=" marker:text-amber-400 list-disc pl-[33px] space-y-3 reason-list px-6 -mt-3 ">
                        <li data-aos="fade-up"
                  data-aos-duration="600"  data-aos-delay="400" >Resposive & Mobile Fast Design</li>
                        <li data-aos="fade-up"
                  data-aos-duration="600"  data-aos-delay="500" >Always update myself with new technology</li>
                        <li data-aos="fade-up"
                  data-aos-duration="600"  data-aos-delay="600" >Provide Customized Solution</li>
                        <li data-aos="fade-up"
                  data-aos-duration="600"  data-aos-delay="700" > Create enteractive and attractive Feature</li>
                    </ul>
                </div>
            </div></div> 
        </div>
    );
};

export default Choice_Me;