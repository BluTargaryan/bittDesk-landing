import React from "react";
import Testimony from "../components/Testimony";

const testimonies = [
  {
    id: 1,
    text: "BittDesk has been a game-changer for my small business. The support is top-notch and it's completely free.",
    person: "John Doe",
  },
  {
    id: 2,
    text: "I love how easy it is to get help whenever I need it. It is very accessible and covers a lot of issues.",
    person: "Sarah Moe",
  },
  {
    id: 3,
    text: "I've been using BittDesk for a while now and it has been a lifesaver. I've been able to solve so many issues with it.",
    person: "Jane Doe",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 w-[90%] m-auto flex flex-col gap-20 items-center justify-center">
      <h1 className="text-4xl font-semibold">Testimonials</h1>

      <div className="grid md:grid-cols-3 gap-8 items-center justify-center">
        {testimonies.map((testimony) => (
          <Testimony
            key={testimony.id}
            text={testimony.text}
            person={testimony.person}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
