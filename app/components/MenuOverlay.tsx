import React from "react";
import NavLink from "@/app/components/NavLink";

export interface LinkDetails {
    href: string;
    title: string;
}

const MenuOverlay = ({links}:{links:LinkDetails[]}) => {
    return (
        <ul className="flex flex-col py-4 items-center">
            {links.map((link, index) => (
                <li key={index}>
                    <NavLink href={link.href} title={link.title}/>
                </li>
            ))}
        </ul>
    );
};


export default MenuOverlay;
