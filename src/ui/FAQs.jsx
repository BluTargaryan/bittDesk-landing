import React, { useState } from "react";
import FAQ from "../components/FAQ";

const fAQs = [
  {
    question: "What is BittDesk?",
    answer:
      "BittDesk is a revolutionary product offering unparalleled IT support services, completely free. Backed by TheITApprentice.com, our mission is to make quality tech support accessible to everyone.",
  },
  {
    question: "Why is BittDesk free?",
    answer:
      "We believe that everyone deserves access to quality IT support, regardless of their financial situation. BittDesk is committed to staying free for all users.",
  },
  {
    question: "How does BittDesk work?",
    answer:
      "BittDesk is a web-based platform that allows users to access a wide variety of IT support tools and resources. Simply sign up for an account, log in, and start using our services.",
  },
  {
    question: "Is BittDesk secure?",
    answer:
      "Yes, BittDesk takes security very seriously. We use industry-standard encryption and other security measures to ensure that your data is safe with us.",
  },
  {
    question: "What kind of IT support does BittDesk offer?",
    answer:
      "BittDesk offers a wide variety of IT support tools and resources, including troubleshooting guides, software downloads, and more. Our goal is to provide comprehensive IT support for all users.",
  },
  {
    question: "How can I contact BittDesk support?",
    answer:
      "You can contact BittDesk support by visiting our website and clicking on the 'Contact Us' button. Our team is available to assist you with any questions or concerns you may have.",
  },
];

const FAQs = () => {
  const [selected, setSelected] = useState("");

  return (
    <section
      id="faqs"
      className="py-16 w-[90%] md:py-24 md:w-[60%] m-auto text-center space-y-7 md:space-y-14"
    >
      <div className="space-y-3">
        <h3 className="text-4xl font-semibold">FAQs</h3>
        <p>Got questions? We got answers.</p>
      </div>

      <div className="flex flex-col gap-6">
        {fAQs.map((faq) => (
          <FAQ
            key={faq.question}
            answer={faq.answer}
            selected={selected}
            question={faq.question}
            getSelected={setSelected}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQs;
