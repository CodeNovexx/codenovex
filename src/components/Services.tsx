import React from "react";
import ServiceImage from "../assets/world-wide-web.png";
import PlusIcon from "../assets/plus.png";
import MinusIcon from "../assets/minus.png";
import { useState } from "react";

const Services = React.forwardRef<HTMLDivElement>((_, ref) => {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggleDescription = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const services = [
    {
      name: "Web 3",
      description:
        "Leverage state-of-the-art technologies to create highly adaptable and interactive web experiences that redefine user engagement and satisfaction.",
    },
    {
      name: "UI/UX",
      description:
        "Design seamless and captivating user interfaces, focusing on intuitive navigation and delightful interactions to elevate user experience to new heights.",
    },
    {
      name: "Front-End",
      description:
        "Engineer dynamic and responsive front-end solutions using cutting-edge frameworks and libraries, ensuring optimal performance and user interaction across devices and platforms.",
    },
    {
      name: "Back-End",
      description:
        "Develop robust and scalable server-side architectures to handle complex business logicArchitect scalable and resilient server-side systems, empowering your applications with robust infrastructure to manage complex business operations and data processing efficiently.",
    },
    {
      name: "SEO",
      description:
        "Strategically optimize websites to enhance their visibility and relevance on search engines, driving organic traffic and maximizing online presence for sustainable growth and success.",
    },
  ];

  return (
    <div className="text-white p-5 md:p-7 lg:p-9" ref={ref}>
      <section className="flex flex-col gap-5 lg:items-center">
        <h1 className="text-2xl md:text-4xl">What We Do ?</h1>
        <h1 className="md:text-xl lg:text-2xl">
          We Developed Software Solutions That Grows Startups And Businesses
        </h1>
      </section>

      {services.map((service, index) => (
        <div key={index} className="relative">
          <div className="flex gap-2 items-center mt-10 justify-between md:text-xl">
            <div className="flex gap-2 items-center">
              <img src={ServiceImage} alt="Icon" className="w-7 h-7" />
              <p>{service.name}</p>
            </div>
            <img
              src={openIndex === index ? MinusIcon : PlusIcon}
              alt={openIndex === index ? "minus_icon" : "plus_icon"}
              className="w-6 h-6 bg-white rounded-full p-[1px] cursor-pointer"
              onClick={() => toggleDescription(index)}
            />
          </div>
          <div
            className={`mt-2 p-3 bg-gray-800 rounded-lg text-sm font-bold text-gray-300 overflow-hidden transition-all duration-500 md:text-lg ${
              openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {service.description}
          </div>
        </div>
      ))}
    </div>
  );
});

export default Services;
