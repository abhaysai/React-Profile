import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
//import LightSpeed from "react-reveal/LightSpeed";
import Job1 from "../assets/Taj.jpg";
import Job2 from "../assets/Taj2.jpg";
import Job3 from "../assets/Taj4.jpg";
import Job4 from "../assets/Turkey.jpg";
import UserImg from "../assets/taj3.jpg";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const Contact = () => {
    useEffect(() => {
        AOS.init();
      }, []);

      const images = [UserImg, Job1, Job2, Job3, Job4];
      
        return (
          <>
            <div className="w-full h-screen bg-gradient-to-l from-[#21073C] to-[#3A1078] text-gray-300 py-32"
><Swiper
  slidesPerView={1}
  spaceBetween={30}
  loop={true}
  pagination={{
    clickable: true,
  }}
  navigation={true}
  modules={[Navigation]}
  className="mySwiper"
>
  {images.map((img) => (
    <SwiperSlide key={img.id} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img
        loading="lazy"
        src={img}
        alt="my img"
        style={{ width: '50%', height: '50%', objectFit: 'cover' }}
      />
    </SwiperSlide>
  ))}
</Swiper>
</div>
                <div
      name="contact"
      className="w-full h-screen bg-gradient-to-l from-[#21073C] to-[#3A1078] text-gray-300 py-32"
    >
      <div className="flex flex-col justify-center items-center w-full h-full text-white">
        {/* Heading */}
        <p className="text-4xl font-bold inline border-b-4 border-[#00FFCA]">
          Contact Me
        </p>
        {/* Description */}
        <p className="py-6">
          Submit the form below or send me an email -{" "}
          <span className="font-bold">abhaysaimamidi@gmail.com</span>
        </p>
           
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="text-sm">
                      Full name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder=""
                     
                      className="bg-gray-100 text-gray-950 p-2 w-full rounded-md active:border-[#00FFCA] active:border-2"
              data-aos="fade-down" data-aos-duration="600" data-aos-easing="linear"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm">
                      Email
                    </label>
                    <input
              type="email"
              placeholder="Email"
              name="email"
              className="my-4 p-2 bg-gray-100 text-gray-950 w-full rounded-md active:border-[#00FFCA] active:border-2"
              data-aos="fade-down" data-aos-duration="800" data-aos-easing="linear"
            />
                  </div>
                  <div>
                    <label htmlFor="message" className="text-sm">
                      Message
                    </label>
                    <textarea
              name="message"
              className="bg-gray-100 p-2 w-full text-gray-950 rounded-md active:border-[#00FFCA] active:border-2"
              data-aos="fade-down" data-aos-duration="1000" data-aos-easing="linear"
              placeholder="Message"
              rows="4"
            ></textarea>
                  </div>
                  <button
                    
                    onclick=""
                    className="group border-2 px-6 py-3 my-2 hover:bg-[#00FFCA] flex font-semibold"
                    >
                    Send Message
                  </button>
                </form>
              </div>
             
              </div>
            
              </>
          
        );
      };
      
      
export default Contact;