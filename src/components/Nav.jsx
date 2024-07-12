import React, { useState } from "react";
import { Link } from "react-scroll";
import ButtonOutlined from "./ButtonOutlined";

const hamburger =
  "w-8 h-0.5 block bg-primary duration-200 transition-transform";

const itemStyle =
  "p-3 [&:not(:last-child)]:border-b md:border-none border-primary md:p-0 text-center md:text-left";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="w-full bg-secondary flex flex-row p-4 md:px-8 justify-between items-center text-primary fixed z-20">
      <Link className="navLink" smooth={true} duration={300} to="hero">
      <div className="self-start text-2xl md:text-4xl font-bold">BittDesk</div>
      </Link>
      <ul
        className={`absolute z-10 left-0 top-16 md:static md:w-max text-sm py-2 md:p-0 flex-col md:flex-row md:flex md:gap-6 md:text-lg bg-secondary md:bg-transparent transition-all duration-200 ease-in-out ${
          isMenuOpen ? "left-0 right-0" : "right-full"
        }`}
      >
        <li className={itemStyle}>
          <Link
            className="navLink"
            onClick={toggleMenu}
            smooth={true}
            duration={300}
            to="features"
          >
            Features
          </Link>
        </li>
        <li className={itemStyle}>
          <Link
            onClick={toggleMenu}
            className="navLink"
            smooth={true}
            duration={300}
            to="testimonials"
          >
            Testimonials
          </Link>
        </li>
        <li className={itemStyle}>
          <Link
            className="navLink"
            onClick={toggleMenu}
            smooth={true}
            duration={300}
            to="pricing"
          >
            Pricing
          </Link>
        </li>
        <li className={itemStyle}>
          <Link
            className="navLink"
            onClick={toggleMenu}
            smooth={true}
            duration={300}
            to="donations"
          >
            Donations
          </Link>
        </li>
        <li className={itemStyle}>
          <Link
            onClick={toggleMenu}
            className="navLink"
            smooth={true}
            duration={300}
            to="partnerships"
          >
            Partnerships
          </Link>
        </li>
        <li className={itemStyle}>
          <Link
            className="navLink"
            onClick={toggleMenu}
            smooth={true}
            duration={300}
            to="faqs"
          >
            FAQs
          </Link>
        </li>
        <li className={itemStyle}>
          <Link
            className="navLink"
            onClick={toggleMenu}
            smooth={true}
            duration={300}
            to="contact"
          >
            Contact Us
          </Link>
        </li>
      </ul>
      <div className="md:flex hidden items-center">
        <ButtonOutlined />
      </div>

      <button
        onClick={toggleMenu}
        type="button"
        className="flex md:hidden flex-col gap-2"
      >
        <span
          className={`${hamburger} ${
            isMenuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`${hamburger} ${
            isMenuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>
    </nav>
  );
};

export default Nav;
