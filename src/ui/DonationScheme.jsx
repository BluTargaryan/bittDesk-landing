import { useState } from "react";

import { Link } from "react-router-dom";

import google from "../assets/google.svg";
import paypal from "../assets/paypal.svg";
import mastercard from "../assets/mastercard.svg";

const btnStyles =
  "appearance-none text-nowrap px-4 py-2 rounded-xl font-medium";
const active = "bg-secondary text-primary ";

const btns = [
  {
    value: "one-time",
    text: "One time donation",
  },
  {
    value: "monthly",
    text: "Monthly donation",
  },
];

const paymentOptions = [
  {
    img: google,
    text: "Google Pay",
  },
  {
    img: paypal,
    text: "PayPal",
  },
  {
    img: mastercard,
    text: "Credit Card",
  },
];

function DonationScheme() {
  const [selected, setSelected] = useState("one-time");
  return (
    <section
      id="donations"
      className="py-16 md:py-24 w-[90%] md:w-[70%] m-auto text-center space-y-14"
    >
      <div className="space-y-3">
        <h3 className="text-3xl md:text-4xl font-semibold">Donate Scheme</h3>
        <p>Support BittDesk and help us grow.</p>
      </div>
      <p className="md:text-2xl font-medium">
        Your contributions ensure that our developers are fairly compensated and
        enable us to continue providing exceptional service.
      </p>

      <div className="border rounded-xl border-secondary grid-cols-2 m-auto md:w-[50%] overflow-hidden grid text-sm md:text-base">
        {btns.map((btn) => (
          <button
            type="button"
            className={`${selected === btn.value ? active : ""} ${btnStyles}`}
            value={btn.value}
            onClick={(e) => {
              setSelected(e.target.value);
            }}
          >
            {btn.text}
          </button>
        ))}
      </div>

      <div className="p-4 md:p-12 md:pt-6 shadow-custom rounded-xl space-y-8">
        <h3 className="font-semibold">Donate using</h3>
        <div className="flex flex-col gap-6 md:flex-row justify-between items-center md:w-[40%] m-auto">
          {paymentOptions.map((option) => (
            <Link
              to={"#"}
              className="flex flex-col items-center gap-2 hover:scale-105 duration-150 transition-transform"
            >
              <img src={option.img} alt={option.text} className="w-10 h-10" />
              <p className="text-sm font-normal">{option.text}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DonationScheme;
