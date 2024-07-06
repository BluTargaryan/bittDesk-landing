import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Pricing from "./ui/Pricing";
import Partnership from "./ui/Partnership";
import Hero from "./ui/Hero";
import Features from "./ui/Features";
import Testimonials from "./ui/Testimonials";
import DonationScheme from "./ui/DonationScheme";
import FAQs from "./ui/FAQs";
import Contact from "./ui/Contact";

function App() {
  return (
    <div className="font-montserrat m-auto">
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <DonationScheme />
      <Partnership />
      <FAQs />
      <Contact />
    </div>
  );
}

export default App;
