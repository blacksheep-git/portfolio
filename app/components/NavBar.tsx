"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import NavLink from "@/app/components/NavLink";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
import MenuOverlay from "@/app/components/MenuOverlay";

const navLinks = [{
    href: '#about',
    title: 'About'
    },{
    href: '#projects',
    title: 'Projects'
    },{
    href: '#contact',
    title: 'Contact'
    }]

const NavBar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
            <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
                <Link href={'/'} className="text-2xl md:text-5xl text-white font-semibold"> LOGO </Link>
                <div className="mobile-menu block md:hidden">
                    { !navbarOpen ? (
                        <button className="flex items-center text-slate-200 px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white"
                                onClick={() => setNavbarOpen(!navbarOpen)}>
                            <Bars3Icon className="w-5 h-5"/>
                        </button>
                        ):(
                        <button className="flex items-center px-3 py-2 border rounded text-white border-white
                        hover:text-white hover:border-white" onClick={() => setNavbarOpen(!navbarOpen)}>
                            <XMarkIcon className="w-5 h-5"/>
                        </button>
                        )
                    }
                </div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.href} title={link.title}/>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {navbarOpen && ( <MenuOverlay links={navLinks}/>)}
        </nav>
    );
};

export default NavBar;