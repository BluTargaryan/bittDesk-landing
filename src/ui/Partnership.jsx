import React from "react";
import Feature from "../components/Feature";

import Charity from "../assets/charity.png";
import Crowdfund from "../assets/crowdfunding.png";
import Button from "../components/Button";

const partnershipOptions = [
  {
    image: Charity,
    title: "Charity",
    text: "We’re open to charity initiatives to further enhance our services.",
  },
  {
    image: Crowdfund,
    title: "Crowdfunding",
    text: "We’re open to crowdfunding initiatives to further enhance our services.",
  },
];

const infoQuestions = [
  {
    question:
      "Interested in partnering with us? Reach out to us using the button below and let’s make a difference together.",
    content: "Contact us",
    link: "https://theitapprentice.com/contact-us/",
  },
  {
    question:
      "Want to learn more about our partnership options? Check out our FAQ section for more information. or visit TheITApprentice.com",
    content: "Go to TheITApprentice",
    link: "https://theitapprentice.com/",
  },
];

const Partnership = () => {
  return (
    <section className="py-24 md:px-8 space-y-20">
      <div className="w-[90%] md:w-[70%] flex flex-col gap-16 m-auto text-center">
        <div className="space-y-3">
          <h3 className="text-3xl md:text-4xl font-semibold">Partnership</h3>
          <p>Join us in making a difference.</p>
        </div>
        <p className="md:text-2xl font-medium">
          Your contributions ensure that our developers are fairly compensated
          and enable us to continue providing exceptional service.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-16">
          {partnershipOptions.map((partnership, index) => (
            <Feature
              key={index}
              image={partnership.image}
              title={partnership.title}
              text={partnership.text}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-6 md:flex-row md:gap-20  items-center md:items-end justify-center w-[90%] m-auto md:w-full">
        {infoQuestions.map((info, index) => (
          <div className="flex flex-col gap-5 items-center" key={index}>
            <p className="font-medium text-center">{info.question}</p>
            <a href={info.link} target="_blank" rel="noreferrer">
              <Button width="w-80" content={info.content} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partnership;
