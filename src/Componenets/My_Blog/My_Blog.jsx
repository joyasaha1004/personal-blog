import React from 'react';
import blog_img1 from "../Assets/blog_img1.png";
import blog_img2 from "../Assets/blog_img2.png";
import blog_img3 from "../Assets/blog_img3.png";
import blog_img4 from "../Assets/blog_img4.png";
import blog_img5 from "../Assets/blog_img5.png";
import blog_img6 from "../Assets/blog_img6.png";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from 'react';

const BlogList =[{

img:blog_img1,
span:"Aug24,2022"
},
{
    img:blog_img2,
    span:"jan10,2023"
},
{
    img:blog_img3,
    span:"Dec12,2023"
},
{
    img:blog_img4,
    span:"Feb21,2024"

},
{
    img:blog_img5,
    span:"Sep4,2021"
},
{
    img:blog_img6,
    span:"Oct19,2022"
}]


const My_Blog = () => {

  

    let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  }
  const previous = () => {
    sliderRef.slickPrev();
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#ddd" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#ddd" }}
        onClick={onClick}
      />
    );
  }

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [

      
         
          {
            breakpoint: 1509,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
               
            }
          },
          {
            breakpoint: 999,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              
               
            }
          },
          {
            breakpoint: 499,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
      };


    return (
        <div className="font-serif w-full overflow-x-hidden pt-6 pb-10 lg:pt-14">
            <div className="max-w-screen-xl mx-auto ">
               <div>
                   <h1 className="text-center text-amber-300 font-bold text-2xl md:text-2xl lg:text-4xl xl:text-5xl " data-aos="fade-up"
                  data-aos-duration="600"  data-aos-delay="300" >My Blog</h1>
               </div>

               <div className="flex align-center justify-center w-full  mt-10 lg:mt-16 ">
               <Slider ref={slider => {
          sliderRef = slider;
        }}
        {...settings} className="w-[80%] sm:w-[60%]  md:w-[80%] xl:w-[90%] gap-10 ">
            
            {BlogList.map((data,i)=>(

           <div key={i} className="relative px-3" data-aos="fade-up"
           data-aos-duration="600"  data-aos-delay="400"  >
               <div className="h-fit pb-4 relative  lg:h-[22em] xl:w-64 xl:h-[23em] bg-slate-800  rounded-lg ">
                   <img src={data.img} alt="" className="rounded-lg w-full h-32 sm:w- lg:h-44  xl:w-64 "/>

                   <div className="text-xs px-2 pt-3 text-white lg:text-sm xl:text-base">
                       <button className="px-5 py-1 rounded-md bg-amber-500   hover:bg-amber-300">More</button>

                       <p className="mt-3 px-3 mb-2 text-white lg:text-base lg:mb-4 xl:text-lg leading-relaxed ">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                       <span className="text-[10px] text-gray-500 px-2 md:text-xs xl:text-sm ">{data.span}</span>
                   </div>
               </div>

           </div>

            ))}
       </Slider>

               </div>

            </div>
            
        </div>
    );
};

export default My_Blog;