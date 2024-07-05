import React from "react";

const Button = ({ type, content, width, children }) => {
  return (
    <button
      type={type}
      className={`flex items-center justify-center bg-secondary rounded-full ${width} border h-11 text-primary text-lg hover:bg-primary hover:text-secondary transition-all duration-300 ease-in-out border-black px-8 py-4`}
    >
      {content}
      {children}
    </button>
  );
};

export default Button;
