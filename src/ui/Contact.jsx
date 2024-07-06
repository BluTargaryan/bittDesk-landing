import { useState } from "react";
import Button from "../components/Button";

const inputStyles =
  "appearance-none block w-full p-3 mb-4 border border-secondary rounded-xl bg-primary text-black resize-none focus:outline-none focus:ring-0 focus:border-secondary placeholder-gray-500 text-base md:text-lg";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, message });
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-24 w-[90%] md:w-[70%] m-auto text-center space-y-7 md:space-y-14"
    >
      <div className="space-y-3">
        <h3 className="text-3xl md:text-4xl font-semibold">Contact us</h3>
        <p>Support BittDesk and help us grow.</p>
      </div>

      <p className="text-lg md:text-2xl font-medium">
        Have a question or need support? Fill out the form below and we'll get
        back to you as soon as possible.
      </p>

      <form
        onSubmit={handleSubmit}
        className="p-6 md:p-12 shadow-custom rounded-2xl flex flex-col md:gap-2 items-center"
      >
        <input
          type="text"
          value={name}
          placeholder="Name"
          className={inputStyles}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          value={email}
          placeholder="Email"
          className={inputStyles}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          rows={5}
          type="text"
          value={message}
          className={inputStyles}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="What would you like to talk to us about ?"
        />
        <button
          className="bg-secondary rounded-2xl border text-primary text-lg hover:bg-primary hover:text-secondary transition-all duration-300 ease-in-out border-black px-8 py-2"
          type="submit"
        >
          Send Enquiry
        </button>
      </form>
    </section>
  );
}

export default Contact;
