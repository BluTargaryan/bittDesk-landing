import React from "react";

import CompSupport from "../assets/compsupport.png";
import Secure from "../assets/secure.png";
import UserFriendly from "../assets/userfriendly.png";

import Feature from "../components/Feature";

const features = [
  {
    id: 1,
    image: UserFriendly,
    title: "User-Friendly Interface",
    text: "Navigate our platform with ease, thanks to a clean and intuitive design.",
  },
  {
    id: 2,
    image: CompSupport,
    title: "Comprehensive IT Support",
    text: "Get expert tools you can use to solve a wide variety of tech issues, anytime.",
  },
  {
    id: 3,
    image: Secure,
    title: "Secure and Reliable",
    text: "Rest assured that your data is safe with us, as we take security seriously.",
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="py-24 w-[90%] m-auto flex flex-col gap-20 items-center"
    >
      <h1 className="text-4xl font-semibold">Features</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-16">
        {features.map((feature) => (
          <Feature
            key={feature.id}
            image={feature.image}
            title={feature.title}
            text={feature.text}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
