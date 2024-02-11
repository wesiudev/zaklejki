"use client";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";

export default function FaqHandler({
  input,
  setInput,
}: {
  input: any;
  setInput: Function;
}) {
  const [faqInput, setFaqInput] = useState({
    question: "",
    answer: "",
  });
  function removeFaq(index: number, input: any, setInput: Function) {
    const newFaqList = [...input.faq];
    newFaqList.splice(index, 1);
    setInput({ ...input, faq: newFaqList });
  }
  return (
    <div className="flex flex-col text-white">
      {" "}
      <p className="text-2xl mb-3">Pytania i odpowiedzi</p>
      <label htmlFor="question">Pytanie</label>
      <input
        name="question"
        placeholder="Wpisz tekst..."
        value={faqInput.question}
        onChange={(e) => setFaqInput({ ...faqInput, question: e.target.value })}
        className="!text-black  bg-slate-400 mt-1 p-2 outline-none placeholder:text-gray-500"
        type="text"
      />
      <label htmlFor="answer">Odpowiedź</label>
      <input
        name="answer"
        placeholder="Wpisz tekst..."
        value={faqInput.answer}
        onChange={(e) => setFaqInput({ ...faqInput, answer: e.target.value })}
        className="!text-black  bg-slate-400 mt-1 p-2 outline-none placeholder:text-gray-500"
        type="text"
      />
      <button
        onClick={() => {
          setInput({ ...input, faq: [...input.faq, faqInput] });
          setFaqInput({ question: "", answer: "" });
        }}
        className="px-4 py-2 bg-blue-500 hover:bg-blue-700 rounded-md text-white mt-2"
      >
        Dodaj
      </button>
      {input.faq.length !== 0 && <h1 className="my-2">Twoje faq</h1>}
      <div className="flex flex-col  w-full">
        {input.faq.map((faq: any, i: number) => (
          <div key={i} className="flex flex-row items-center">
            {faq.question}
            <button
              onClick={() => {
                removeFaq(i, input, setInput);
              }}
              className="ml-3 mr-4"
            >
              <FaTrash />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
