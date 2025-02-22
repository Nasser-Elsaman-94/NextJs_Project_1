"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
        > 
            <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
                <motion.div
                    variants={slideInFromTop}
                    className="Welcome-box py-[1px] px-[12px] border border-[#7042fb] opacity-[0.9] flex items-center"
                >
                    <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
                    <h5 className="Welcome-text text-white font-bold italic text-[13px]">
                        AI as a Service (AIAAS) Pro Projects
                    </h5>
                </motion.div>

                <motion.div 
                    variants={slideInFromLeft(0.5)}
                    className="flex flex-col gap-5 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
                >
                    <span>
                        Providing 
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"> The best </span> 
                        project experience
                    </span>
                </motion.div>

                <motion.p
                    variants={slideInFromLeft(0.8)}
                    className="text-lg text-gray-400 my-5 max-w-[600px]"
                >
                    I'm a Full Stack Software Engineer with experience in website, mobile, and software development. Check my projects and skills.
                </motion.p>

                <motion.button
                    variants={slideInFromLeft(1)}
                    className="py-2 px-4 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
                >
                    Learn More!
                </motion.button>
            </div>

            <motion.div 
                variants={slideInFromRight(0.8)}
                className="w-full h-full flex justify-center items-center"
            >
                <Image
                    src="/mainIconsdark.svg"
                    alt="work icons"
                    height={650}
                    width={650}
                />
            </motion.div>
        </motion.div>
    );
};

export default HeroContent;