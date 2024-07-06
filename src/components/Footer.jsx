import React from "react";
import Button from "./Button";
import ButtonOutlined from "./ButtonOutlined";
import Facebook from "../assets/Facebook.png";
import TwitterX from "../assets/TwitterX.png";
import LinkedIn from "../assets/LinkedIn.png";

const icons = [
  {
    image: Facebook,
    alt: "facebook icon",
    style: "w-8 h-8 md:w-10 md:h-10",
    link: "https://www.facebook.com/TheITApprentice",
  },
  {
    image: TwitterX,
    alt: "twitter icon",
    style: "w-8 h-8 md:w-10 md:h-10",
    link: "https://twitter.com/TheITApprentice",
  },
  {
    image: LinkedIn,
    alt: "linkedin icon",
    style: "w-8 h-8 md:w-10 md:h-10",
    link: "https://www.linkedin.com/company/theitapprentice",
  },
];

const policiesStyles =
  "md:border-b-2 border-primary p-1 md:p-2 text-center cursor-pointer hover:scale-105 duration-200 transition-transform";

const Footer = () => {
  return (
    <footer className="bg-secondary text-primary p-2 md:p-16 pb-0 text-base md:text-2xl">
      <div className="flex flex-col gap-4 md:flex-row items-center justify-between">
        <div className="flex flex-col md:flex-row items-center md:gap-8">
          <p className={policiesStyles}>Privacy Policy</p>
          <p className={policiesStyles}>Terms of Service</p>
        </div>
        <div className="flex flex-col items-center gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            {icons.map((icon) => (
              <a href={icon.link} target="_blank" rel="noreferrer">
                <img
                  alt={icon.alt}
                  key={icon.alt}
                  src={icon.image}
                  className={icon.style}
                />
              </a>
            ))}
          </div>
          <ButtonOutlined />
        </div>
      </div>
      <p className="py-8 text-center md:text-left">
        © 2024 TheITApprentice. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
