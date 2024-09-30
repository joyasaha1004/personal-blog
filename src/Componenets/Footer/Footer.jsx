import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <div>
            <div  className="w-[300px] font-serif h-40 bg-slate-800 text-center mt-[80px] pt-5 sm:w-[500px] md:w-[700px] md:h-44 lg:w-[1000px] xl:w-[1280px] lg:h-[190px] xl:h-[240px] xxl:w-[1500px] ">

                <h1 className="text-[20px] font-sans font-bold text-amber-400 lg:text-[26px] xl:text-[32px] xxl:text-[38px]">JSaha</h1>

                <div className="flex text-xs text-white  gap-5 pt-4 px-[55px] mb-4 sm:px-[130px] sm:gap-8 md:px-[220px] md:text-sm md:gap-10 lg:text-base lg:px-[320px] lg:gap-16 xl:text-xl xl:px-[450px] xl:gap-16 xxl:text-2xl xxl:px-[500px] xxl:gap-20 xl:mt-4">
                <h4 className=" ">Home</h4>
                  <h4 className="">Services</h4>
                  <h4 className="">Work</h4>
                  <h4 className="">Blog</h4> 
                </div>
                    <hr className="mb-2"></hr>

                    <span className="text-[10px] text-gray-400 lg:text-[12px] xl:text-[15px] xxl:text-[18px]
                   ">Copyright @joya saha 2020.All right reserved</span>

                    <div className="logo flex -right-48 sm:-right-52 top-2 gap-2 relative md:-right-[570px] lg:-right-[830px] xl:-right-[1070px] xl:gap-4 xxl:-right-[1250px]">
                    <i class="ri-facebook-fill"></i>
                    <i class="ri-instagram-line"></i>
                    <i class="ri-twitter-line"></i>
                    <i class="ri-telegram-line"></i>

                    </div>

            </div>
            
        </div>
    );
};

export default Footer;