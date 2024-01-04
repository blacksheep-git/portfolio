"use client";
import React, { useState , FormEvent} from "react";
import GitHubIcon from "@/public/icons/github.svg";
import XIcon from "@/public/icons/x.svg";
import LinkedInIcon from "@/public/icons/linkedin.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget as HTMLFormElement);
        const email = formData.get('email') as string;
        const subject = formData.get('subject') as string;
        const message = formData.get('message') as string;
        const data = { email, subject, message };
        const JSONdata = JSON.stringify(data);
        const endpoint = "api/send";
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSONdata,
        };
        const response = await fetch(endpoint, options);
        const resData = await response.json();
        console.log(resData);

        if(response.status === 200) {
            setEmailSubmitted(true);
        } else {
            console.log("Message failed to send.")
        }
    };


    return (
        <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
            {/*<div className="absolute w-80 h-80 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full blur-lg top-full -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>*/}
            <div className="z-10">
                <h5 className="text-xl font-bold text-white my-2">Lets Connect</h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md">
                    {" "}
                    I am always open to new opportunities, whether it be a new project or a new job.
                    Feel free to reach out to me!
                </p>
                <div className="socials flex flex-row gap-2">
                    <Link href="https://github.com/blacksheep-git">
                        <Image src={GitHubIcon} alt="GitHub" />
                    </Link>
                    <Link href="https://github.com/blacksheep-git">
                        <Image src={XIcon} alt="X.com" />
                    </Link>
                    <Link href="https://github.com/blacksheep-git">
                        <Image src={LinkedInIcon} alt="LinkedIn" />
                    </Link>
                </div>
            </div>
            <div className="mt-4">
                <form className="flex flex-col" onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label
                            htmlFor="email"
                            className="text-white block mb-2 text-sm font-medium">
                            Your Email
                        </label>
                        <input
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            type="email"
                            id="email"
                            name="email"
                            required
                            placeholder="youremail@gmail.com"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="subject"
                            className="text-white block mb-2 text-sm font-medium">
                            Subject
                        </label>
                        <input
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            type="text"
                            name="subject"
                            id="subject"
                            required
                            placeholder="Email Subject"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="message"
                            className="text-white block mb-2 text-sm font-medium">
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            required
                            placeholder="Lets talk about..."
                        />
                    </div>
                    <button type={"submit"} className="bg-secondary-700 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full">
                        Send Message
                    </button>
                    {
                        emailSubmitted &&
                        <p className="text-green-500 text-sm mt-2">
                            Message sent successfully!
                        </p>
                    }
                </form>
            </div>
        </section>
    );
};

export default EmailSection;
