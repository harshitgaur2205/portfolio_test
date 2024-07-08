"use client";
import React from "react";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import TypeWriiter from "./TypeWriiter";
import DragCloseDrawerExample from "./DragCloseDrawerExample";
import { useEffect } from "react";
import { useMotionTemplate } from "framer-motion";
import { useMotionValue } from "framer-motion";
import { animate } from "framer-motion";
import { motion } from "framer-motion";

const About = () => {
  const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 10% 48%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 4px ${color}`;

  return (
    
    <motion.div
      // style={{backgroundImage,}}
      id="about"
    className="relative about h-[100vh] w-[100vw] bg-black-900 flex flex-col items-center justify-center relative">
      
      <div className="canva absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
       
      <h1 className="about-txt text-[4.5vw] font-black text-slate-500 shadow-[900px] ">
        HOW WELL DO YOU KNOW ME ?
      </h1>
      <TypeWriiter />
      <br></br>
      <div className="relative z-10">
        <DragCloseDrawerExample />
      </div>
    </motion.div>
  );
};

export default About;
