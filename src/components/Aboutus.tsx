import React from "react";
import Logo_Without_Bg from "../assets/logo_without_background.png";

const Aboutus = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div className="text-white flex flex-col gap-10 lg:flex-row lg:justify-between" ref={ref}>
      <div className="flex flex-col gap-4  p-5 md:p-7 lg:p-9">
        <h1 className="text-4xl">Why us</h1>
        <p className="text-lg leading-[30px]">
          At CodeNovex, we're passionate about leveraging technology to drive
          innovation and empower businesses. With expertise in custom software
          development, web design, and mobile app development, we deliver
          tailored digital solutions that exceed expectations. Collaborate with
          us to turn your ideas into reality and unlock your business's full
          potential.
        </p>

        <div className="hidden lg:flex flex-col gap-3 rounded-3xl bg-[#3A556D] p-5 w-full md:p-7">
        <h1 className="text-4xl">Pricing</h1>
        <p className="text-lg md:text-xl">
          Discover our unbeatable value. Our transparent pricing ensures you get
          top-notch solutions tailored to your budget, without compromising
          quality. No hidden fees, just straightforward pricing for exceptional
          results
        </p>
      </div>
      </div>

      <div className="relative border border-1-white m-5 rounded-3xl flex flex-col gap-3 md:m-7 lg:m-9">
        <div className="flex justify-between items-center pr-5">
          <img src={Logo_Without_Bg} alt="Logo" className="w-28 h-28" />
          <p className="text-3xl md:text-4xl">CodeNovex</p>
        </div>

        <p className="px-5 pb-5 md:text-xl">
          We thrive on innovation, constantly seeking out the latest
          technologies and techniques to stay ahead of the curve. Our
          forward-thinking approach ensures that we deliver cutting-edge
          solutions to our clients.
        </p>

        <button className="bg-white m-5 rounded-3xl text-black p-2 text-xl md:text-2xl">
          Contact Us
        </button>
      </div>

      <div className="flex flex-col gap-3 bg-[#3A556D] p-5 w-full md:p-7 lg:hidden">
        <h1 className="text-4xl">Pricing</h1>
        <p className="text-lg md:text-xl">
          Discover our unbeatable value. Our transparent pricing ensures you get
          top-notch solutions tailored to your budget, without compromising
          quality. No hidden fees, just straightforward pricing for exceptional
          results
        </p>
      </div>
    </div>
  );
});

export default Aboutus;
