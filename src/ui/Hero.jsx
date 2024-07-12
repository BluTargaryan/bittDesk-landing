import React from "react";
import Button from "../components/Button";
import HeroImage from "../assets/hero-image.png";

const Hero = () => {
  return (
    <section
      id="hero"
      className="py-16 md:py-24 w-[90%] m-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12"
    >
      <div className="flex flex-col gap-6 md:gap-12 order-1 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-semibold">
        Experience the future of free ITSM tools
        </h1>

        <div className="flex flex-col gap-4 items-center md:items-start">
          <p className="text-lg md:text-2xl">
          BittDesk is a free helpdesk software solution designed to provide exceptional IT support services. Powered by TheITApprentice.com, our goal is to make reliable tech support tools available to everyone.
          </p>
          <Button content="Get BittDesk now!" width="w-64" />
        </div>
      </div>

      <img
        src={HeroImage}
        alt="3d image of a man representing assurance of services"
        className="h-auto"
      />
    </section>
  );
};

export default Hero;
