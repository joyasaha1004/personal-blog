import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <div>
            <div  className="font-serif w-full bg-slate-800 text-center pt-4 xl:pt-6 overflow-x-hidden">

                <h1 className=" font-sans font-bold text-amber-400 text-lg sm:text-xl lg:text-2xl xl:text-3xl">JSaha</h1>

                <div className="footer flex text-xs text-white justify-self-center  gap-5 pt-3 mb-4 sm:gap-8  md:text-sm md:gap-10 lg:text-base lg:gap-10 xl:pt-5 xl:text-xl xl:gap-16 xxl:text-2xl xxl:gap-20 ">
                <h4 className=" ">Home</h4>
                  <h4 className="">Services</h4>
                  <h4 className="">Work</h4>
                  <h4 className="">Blog</h4> 
                </div>

                <div className="logo flex justify-self-center gap-2 pb-2">
                    <i class="ri-facebook-fill"></i>
                    <i class="ri-instagram-line"></i>
                    <i class="ri-twitter-line"></i>
                    <i class="ri-telegram-line"></i>

                    </div>
                    <hr className=""></hr>

                    <span className="text-[10px] text-gray-400 lg:text-[12px] xl:text-[15px] xxl:text-[18px]
                   ">Copyright @joya saha 2020.All right reserved</span>

                    {/* <div className="logo flex -right-48 sm:-right-52 top-2 gap-2 relative md:-right-[570px] lg:-right-[830px] xl:-right-[1070px] xl:gap-4 xxl:-right-[1250px]">
                    <i class="ri-facebook-fill"></i>
                    <i class="ri-instagram-line"></i>
                    <i class="ri-twitter-line"></i>
                    <i class="ri-telegram-line"></i>

                    </div> */}

            </div>
            
        </div>
    );
};

export default Footer;