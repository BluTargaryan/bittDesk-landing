import { useState } from "react";

function FAQ({ question, answer, selected, getSelected }) {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer((answer) => !answer);
    getSelected(question);
  };

  const answerStyles =
    question === selected ? "flex text-base text-left w-full" : "hidden";
  return (
    <button
      className="border border-primary rounded-2xl px-4 md:px-8 py-3 md:py-4 w-full flex flex-col gap-4 shadow-custom"
      onClick={toggleAnswer}
    >
      <h4 className="font-semibold text-lg md:text-xl">{question}</h4>
      <p className={answerStyles}>{answer}</p>
    </button>
  );
}

export default FAQ;
