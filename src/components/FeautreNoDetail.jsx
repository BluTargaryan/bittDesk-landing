import React from "react";

const FeatureNoDetail = ({ image, title, text}) => {
  return (
    <div className="rounded-lg p-4 w-full h-full flex flex-col items-center justify-center gap-6 shadow-custom relative  overflow-hidden cursor-pointer">
      <img
        src={image}
        alt={title}
        className="h-2/5 w-auto"
      />

      <div className="flex flex-col gap-2 items-center">
        <h3 className="text-2xl font-semibold text-center">{title}</h3>
        <p className="text-center w-10/12">{text}</p>
      </div>

 
    </div>
  );
};

export default FeatureNoDetail ;
