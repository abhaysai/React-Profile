
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
//import LightSpeed from 'react-awesome-reveal/LightSpeed';

const Skill = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const skill = [
    {
      name: "Languages",
      data: [
        { name: "C", score: 90 },
        { name: "Java", score: 80 },
        { name: "HTML/CSS", score: 80 },
        { name: "JavaScript", score: 90 },
      ],
    },
    {
      name: "Tools",
      data: [
        { name: "VS Code", score: 90 },
        { name: "Git", score: 80 },
        { name: "SQL", score: 90 },
        { name: "NodeJS", score: 90 },
      ],
    },
  
  ];

  return (
   <>
      <div
      name="skill"
      className="w-full bg-gradient-to-l from-[#21073C] to-[#3A1078] text-gray-300  py-32"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center  h-full text-white">
        <div>
         
          
      
      <section className="max-w-screen-lg mx-auto pt-24 mb-[4.5rem]" data-aos="fade-up">
        <section className="py-6 sm:py-12 dark:text-gray-100">
          <div className="container p-6 mx-auto space-y-8" data-aos="fade-up">
            <div className="space-y-2 text-center" data-aos="fade-up">
            <p className="text-4xl font-bold inline border-b-4 border-[#00FFCA]">
            Skills
          </p>
              <h2 className="font-min mb-10">Check out my Skills</h2>
            </div>
            <div className="max-w-screen-xl p-5 mx-auto" data-aos="fade-up">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {skill.map((skill, index) => (
                  <div
                    key={index}
                    className="max-w-md rounded-xl border bg-white p-6 pb-10 text-gray-900"
                    data-aos="fade-up"
                  >
                    <p className="text-lg font-medium">{skill.name}</p>
                    {skill.data.map((el, elIndex) => (
                      <div className="mt-4" key={elIndex}>
                        <p className="float-left mb-2">{el.name}</p>
                        <span className="float-right mb-2">{el.score} %</span>
                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-300">
                          <div
                            style={{ width: el.score + '%' }}
                            className="h-full  overflow-hidden rounded-full bg-indigo-600"
                          ></div>
                         
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </section>
      </div>
      </div></div>
      </>
  );
};

export default Skill;
