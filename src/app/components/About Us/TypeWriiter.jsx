import React from "react";
import { useTypewriter } from "react-simple-typewriter";
const TypeWriiter = () => {
  const [typeEffect] = useTypewriter({
    words: ["Web Deveoper ?", "Data Analysis ?", "Actor ?", "Rapper ?", "Writter ?"],
    loop: {},
    typeSpeed: 50,
    deleteSpeed: 30,
  });
  return (
    <div className="about-txt text-[3.5vw] font-black text-slate-500 shadow-lg ">
      <h1 >
        AM I A <t></t> <span className="text-indigo-600">{typeEffect}</span> 
      </h1>
    </div>
  );
};

export default TypeWriiter;
