"use client";
import React, { useTransition, useState } from 'react';
import Image from "next/image";
import TabButton from "@/app/components/TabButton";



const AboutSection = () => {
    const [tab, setTab] = useState<string>("skills");
    const [isPending,startTransition] = useTransition();

    const handleTabChange = (id: string) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className="text-white">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image src={"/About-Me.png"} alt={"about me"} width={500} height={500}/>
                <div className="">
                    <h2 className="test-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base md:text-lg">
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
                    <div className="flex flex-row mt-8">
                        <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills" }>Skills</TabButton>
                        <span className="mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-purple-500">Skills</span>
                        <span>Education</span>
                        <span>Experience</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
