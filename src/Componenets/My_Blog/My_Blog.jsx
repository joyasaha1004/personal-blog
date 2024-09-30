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
            breakpoint: 1499,
            settings: {
              slidesToShow: 3,
           
            }
          },
         
          {
            breakpoint: 999,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
                centerPadding: "40px",
            }
          },
          {
            breakpoint: 499,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              
               
            }
          },
          {
            breakpoint: 299,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
      };


    return (
        <div>
            <div className="w-[300px]  font-serif mt-[80px] pb-5 sm:w-[500px] md:w-[700px]
            lg:w-[1000px] lg:mt-[150px] xl:w-[1280px] xxl:w-[1500px] xxl:mt-[200px]">
               <div>
                   <h1 className="text-center text-amber-300 font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl xxl:text-5xl" data-aos="fade-up"
                  data-aos-duration="600"  data-aos-delay="300" >My Blog</h1>
               </div>

               <div className="mt-9 mx-7 sm:mx-7 lg:mx-12 lg:mt-16 xl:mx-16">
               <Slider ref={slider => {
          sliderRef = slider;
        }}
        {...settings} >
            
            {BlogList.map((data)=>(

           <div className="ml-6 sm:ml-2 lg:ml-6 xl:ml-10 "data-aos="fade-up"
           data-aos-duration="600"  data-aos-delay="400"  >
               <div className="w-[200px] h-64  bg-slate-800  rounded-lg lg:w-[250px] lg:h-[340px] xl:w-[300px] xl:h-[410px] xxl:w-[380px] xxl:h-[520px]">
                   <img src={data.img} alt="" className="rounded-lg h-32 w-[200px] lg:w-[250px] lg:h-44 xl:w-[300px] xl:h-52 xxl:w-[380px] xxl:h-72"/>

                   <div className="text-xs px-2 pt-3 text-white lg:text-sm xl:text-base">
                       <button className="px-4 py-1 rounded-md bg-amber-400 xxl:text-xl">More</button>

                       <p className="mt-3 px-3 mb-2 lg:text-base lg:mb-5 xl:text-xl xl:mb-7 xxl:text-2xl xxl:leading-widest xxl:mt-5">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                       <span className="text-[12px] text-gray-500 px-2 xl:text-[15px] xxl:text-[18px]">{data.span}</span>
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