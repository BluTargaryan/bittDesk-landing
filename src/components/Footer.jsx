import React from "react";
import Button from "./Button";
import ButtonOutlined from "./ButtonOutlined";
import Facebook from "../assets/Facebook.png";
import TwitterX from "../assets/TwitterX.png";
import LinkedIn from "../assets/LinkedIn.png";

const Footer = () => {
  return (
    <footer className="bg-secondary flex flex-col gap-8 py-4 md:px-8 justify-center text-primary font-montserrat">
      <div className="flex flex-col md:flex-row md:text-left items-center justify-between gap-4 md:w-full w-[90%] m-auto">
        <div className="flex flex-col items-center md:flex-row md:gap-6 gap-2">
          <a href="#" className="border-b-2  text-base md:text-2xl">
            Privacy Policy
          </a>
          <a href="#" className="border-b-2  text-base md:text-2xl">
            Terms of Service
          </a>
        </div>
        <div className="flex flex-col items-center md:flex-row gap-2">
          <div className="flex items-center">
            <a href="#">
              {" "}
              <img className="h-6 w-6" src={Facebook} alt="facebook" />
            </a>
            <a href="#">
              {" "}
              <img className="h-6 w-6" src={TwitterX} alt="TwitterX" />
            </a>
            <a href="#">
              {" "}
              <img className="h-6 w-6" src={LinkedIn} alt="LinkedIn" />
            </a>
          </div>
          <ButtonOutlined />
        </div>
      </div>

      <p className=" text-base md:text-2xl">
        © 2024 TheITApprentice. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
