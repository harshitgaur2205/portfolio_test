"use client"
import React from "react";
import Example from "./TiltCard";

const Card = (props) => {
  return (
    <div className="relative flex w-[100%] items-center p-[100px] gap-[8%]  ">
      <Example image = {props.image}  title = {props.heading} link={props.link} />
      <div className="project-heading flex-column items-center">
        <h1 className="w-[90%] text-[4vw] font-bold text-indigo-600">{props.heading}</h1>
        <p className="w-[100%] text-[1.5vw] text-[#a19bb1]">
            {props.detail}
        </p>
      </div>
    </div>
  );
};

export default Card;
