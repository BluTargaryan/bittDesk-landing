import React from "react";

const Testimony = ({ text, person }) => {
  return (
    <div className="flex flex-col items-center justify-between text-center gap-4">
      <p className="font-medium text-2xl">{text}</p>
      <p className="font-semibold text-sm opacity-50">{person}</p>
    </div>
  );
};

export default Testimony;
