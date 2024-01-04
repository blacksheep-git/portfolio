"use client";
import React from "react";
import Image from "next/image";
import {TypeAnimation} from "react-type-animation";
import GitHubIcon from "@/public/icons/github.svg";
import {motion} from "framer-motion";

const HeroSection = () => {
    return (
        <section className="lg:py-5">
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.5}}
                    className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="text-white mb-4 text-4xl sm:text-4xl lg:text-6xl font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary-700 via-primary-500 to-secondary-500">
                            Hello, I{"'"}m
                        </span>
                        <br/>
                        <TypeAnimation
                            sequence={[
                                'Mateo Ortegon',
                                1500,
                                'Teo.',
                                2000
                            ]}
                            wrapper="span"
                            speed={40}
                            repeat={0}
                            deletionSpeed={40}
                            cursor={false}
                        />

                    </h1>
                    <p className="text-[#ADB7BE] text-lg mb-6 lg:text-xl">
                        I am a Software Engineer with 2 years of professional experience working on critical large-scale
                        software. Currently, I work on a back-end payments routing and data transformation
                        application that processes hundreds of transactions per second, totaling ~$4T USD globally per day.
                        <br/><br/>
                        Before I started my Computer Science degree, I was a freelancer offering services to eCommerce
                        stores, from front-end code development to platform migrations and digital ads – and at one
                        point co-founded an online brand that reached {">50k"} active community members before we sold it in
                        2020.
                        <br/><br/>
                        Outside of code, I like to mountain bike (competed at a national level for some time),
                        dirt-bike, off-road in my Jeep, and make craft cocktails.
                    </p>
                    <div className="">
                        <button className="w-fit px-1 py-1 rounded-full bg-gradient-to-br from-primary-700
                        via-primary-600 to-secondary-500 hover:bg-slate-800 text-white mt-3 mr-4">
                            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 text-white">
                                Download Resume
                            </span>
                        </button>
                        <button className="w-fit px-2 py-2 rounded-full mr-4 bg-white bg-gradient-to-br
                        from-primary-700 via-primary-600 to-secondary-500 hover:bg-slate-200 text-white">
                            {/*<span>*/}
                                <Image className="inline-block align-middle h-8 w-8" src={GitHubIcon} alt="GitHub" />
                            {/*</span>*/}
                        </button>
                    </div>
                </motion.div>
                <div className="col-span-4 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full w-[250px] h-[250px] lg: w-[400px] lg:h-[400px] relative">
                        <Image
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
                            src="/Mateo-Ortegon-Headshot.jpg"
                            width={300}
                            height={300}
                            alt="Mateo Ortegon"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
