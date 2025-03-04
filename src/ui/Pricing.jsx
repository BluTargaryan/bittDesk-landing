import React from "react";
import NoCost from "../assets/nocost.png";

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 md:py-24 ">
      <div className="w-[90%] m-auto grid md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-8">
          <div className="space-y-3">
            <h3 className="text-3xl md:text-4xl font-semibold">Pricing</h3>
            <p className="md:text-2xl">BittDesk is completely free!</p>
          </div>
          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-semibold">Why ?</h2>
            <p className="md:text-2xl">
              We believe that everyone deserves access to quality IT support,
              regardless of their financial situation. BittDesk is committed to
              staying free for all users.
            </p>
          </div>
        </div>
        <img
          src={NoCost}
          alt="3d image of a man representing assurance of services"
          className="self-end justify-end"
        />
      </div>
    </section>
  );
};

export default Pricing;
