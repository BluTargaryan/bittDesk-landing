import React from "react";

const Feature = ({ image, title, text, detail}) => {
  return (
    <div className="rounded-lg p-4 w-full h-full flex flex-col items-center justify-center gap-6 shadow-custom relative  overflow-hidden cursor-pointer group">
      <img
        src={image}
        alt={title}
        className="h-2/6 w-auto"
      />

      <div className="flex flex-col gap-2 items-center">
        <h3 className="text-2xl font-semibold text-center">{title}</h3>
        <p className="text-center w-10/12">{text}</p>
      </div>

      <div className="absolute rounded-lg p-4 top-0 left-0 w-full h-full flex flex-col  items-center justify-center bg-secondary text-primary z-10 translate-x-[-100%]
      group-hover:translate-x-0 transition-transform duration-300 ease-in-out text-center">
       {detail}
      </div>
    </div>
  );
};

export default Feature;
