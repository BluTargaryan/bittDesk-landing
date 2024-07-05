import React from "react";
import { Link } from "react-scroll";
import ButtonOutlined from "./ButtonOutlined";

const Nav = () => {
  return (
    <nav className="w-full bg-secondary flex flex-col md:flex-row px-8 md:py-4 justify-between items-center text-primary font-montserrat">
      <span className="text-4xl font-bold">BittDesk</span>
      <ul className="text-base flex flex-col md:flex-row md:flex md:gap-6 md:text-lg">
        <li>
          <Link className="navLink" smooth={true} duration={300} to="features">
            Features
          </Link>
        </li>
        <li>
          <Link
            className="navLink"
            smooth={true}
            duration={300}
            to="testimonials"
          >
            Testimonials
          </Link>
        </li>
        <li>
          <Link className="navLink" smooth={true} duration={300} to="pricing">
            Pricing
          </Link>
        </li>
        <li>
          <Link className="navLink" smooth={true} duration={300} to="donations">
            Donations
          </Link>
        </li>
        <li>
          <Link
            className="navLink"
            smooth={true}
            duration={300}
            to="partnerships"
          >
            Partnerships
          </Link>
        </li>
        <li>
          <Link className="navLink" smooth={true} duration={300} to="faqs">
            FAQs
          </Link>
        </li>
        <li>
          <Link className="navLink" smooth={true} duration={300} to="contact">
            Contact Us
          </Link>
        </li>
      </ul>
      <ButtonOutlined />
    </nav>
  );
};

export default Nav;
