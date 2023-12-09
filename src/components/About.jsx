import React, { useEffect } from "react";
import pic from "../assets/pic1.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
 
 
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-l from-[#21073C] to-[#3A1078] text-gray-300 dark:bg-[#21073C]"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          {/* About heading */}
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#00FFCA]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          {/* Profile picture */}
          <div className="flex justify-center items-center" data-aos="fade-right" data-aos-duration="800" data-aos-easing="linear">
            <img
              src={pic}
              alt="ABHAY SAI"
              className="rounded-full shadow-2xl outline-offset-8 outline-dashed outline-2"
              style={{ width: "20rem", height: "20rem" }}
            />
          </div>
          {/* About content */}
          <div className="flex flex-col justify-center">
            {/* Introduction */}
            <p className="text-xl font-bold pb-2 text-[#00FFCA]">
              Hello, it's a pleasure to meet you
            </p>
            {/* Description */}
            <p className="text-sm leading-7">
            Hey there! I'm<span id="bolded"> ABHAY SAI</span>, a Java Developer with 2.5 years of experience at <span id="bolded">TCS</span>. Now, I'm diving into the world of <span id="bolded">AI</span> with a pursuit of a Master's degree starting Fall 2023. I thrive on challenging tasks and bring a <span id="bolded">disciplined</span> work ethic to the table.

Beyond coding, I'm a <span id="bolded">sociable individual </span>who values meaningful connections. My time at school has been rewarding and I'm eager to explore and contribute to the dynamic field of <span id="bolded">Artificial Intelligence</span>. Check out my portfolio for a glimpse into my tech journey</p>
   
            
            {/* Download resume button */}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;