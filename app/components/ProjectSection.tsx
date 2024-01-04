"use client";
import React, {useState,useRef} from 'react';
import ProjectCard from "@/app/components/ProjectCard";
import ProjectTag from "@/app/components/ProjectTag";
import {motion, useInView} from "framer-motion";

const projectData = [
    {
        id: "1",
        title: "Project 1",
        description: "project 1 description",
        image: "/projects/1.png",
        liveProjectUrl: "/",
        sourceUrl: "/",
        tag: ["All","Web", "University"]
    },
    {
        id: "2",
        title: "Project 2",
        description: "project 2 description",
        image: "/projects/2.png",
        liveProjectUrl: "/",
        sourceUrl: "/",
        tag: ["All","Web", "University"]
    }
]

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref,{once: true});

    const filteredProjects = projectData.filter((project) =>
        project.tag.includes(tag)
    );

    const handleTagChange = (newTag:string) => {
        setTag(newTag);
    };

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 }
    }

    return (
        <section ref={ref}>
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                My Projects
            </h2>
            <div className="flex flex-row justify-center items-center gap-2 text-white my-6">
                <ProjectTag
                    name="All"
                    onClick={handleTagChange}
                    isSelected={tag === "All"}
                />
                <ProjectTag
                    name="Web"
                    onClick={handleTagChange}
                    isSelected={tag === "Web"}
                />
                <ProjectTag
                    name="Cloud"
                    onClick={handleTagChange}
                    isSelected={tag === "Cloud"}
                />
            </div>
            <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
                {filteredProjects.map((project) => (
                    <motion.li variants={cardVariants} initial="initial" animate={isInView? "animate" : "initial"} key={project.id}>
                        <ProjectCard
                            title={project.title}
                            description={project.description}
                            imgUrl={project.image}
                         liveProjectUrl={project.liveProjectUrl} sourceUrl={project.sourceUrl}/>
                    </motion.li>
                ))}
            </ul>
        </section>
    );
};

export default ProjectsSection;
