"use client";
import React, { useTransition, useState } from 'react';
import Image from "next/image";
import TabButton from "@/app/components/TabButton";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <div className={"grid grid-cols-2 gap-4"}>
                <div className="flex flex-col">
                    <h3 className="text-lg font-bold">Languages</h3>
                    <ul className="list-disc pl-2">
                        <li>Java</li>
                        <li>C/C++</li>
                        <li>Python</li>
                        <li>Rust</li>
                        <li>JavaScript</li>
                    </ul>
                </div>
                <div className="flex flex-col">
                    <h3 className="text-lg font-bold">Frameworks</h3>
                    <ul className="list-disc pl-2">
                        <li>React</li>
                        <li>Next.js</li>
                        <li>Spring Boot</li>
                    </ul>
                </div>
                <div className="flex flex-col">
                    <h3 className="text-lg font-bold">Databases</h3>
                    <ul className="list-disc pl-2">
                        <li>MySQL</li>
                        <li>PostgreSQL</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
                <div className="flex flex-col">
                    <h3 className="text-lg font-bold">Tools & Platforms</h3>
                    <ul className="list-disc pl-2">
                        <li>GitHub</li>
                        <li>Bitbucket</li>
                        <li>Postman</li>
                        <li>AWS</li>
                        <li>Kubernetes</li>
                        <li>Linux</li>
                        <li>MacOS</li>
                    </ul>
                </div>
            </div>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>Fullstack Academy of Code</li>
                <li>University of California, Santa Cruz</li>
            </ul>
        ),
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul className="list-disc pl-2">
                <li>JPMorgan Chase</li>
            </ul>
        ),
    },
];

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
                <div className="flex flex-col h-full">
                    <Image src={"/About-Me.png"} alt={"about me"} width={500} height={500}/>
                </div>
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="test-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base md:text-lg">
                        I am a Software Engineer with 2 years of professional experience working on critical large-scale
                        software. Currently, I work on a back-end payments routing and data transformation
                        application that processes hundreds of transactions per second, totaling ~$4T USD globally per day.
                    </p>
                    <div className="flex flex-row mt-8">
                        <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills" }>{" "}Skills{" "}</TabButton>
                        <TabButton selectTab={() => handleTabChange("experience")} active={tab === "experience" }>{" "}Experience{" "}</TabButton>
                        <TabButton selectTab={() => handleTabChange("education")} active={tab === "education" }>{" "}Education{" "}</TabButton>
                    </div>
                    <div className="mt-8">
                        {isPending? ("Loading..."):TAB_DATA.find((t) => t.id === tab)?.content}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
