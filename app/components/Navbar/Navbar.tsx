'use client'

import Image from "next/image";
import Link from "next/link";
import menu from '../../img/menu.svg'
import menu_close from '../../img/menu-close.svg'
import { navLinks } from "./navLinks";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { UserButton, useUser } from "@clerk/nextjs";

export default function Navbar() {

    const { user, isLoaded } = useUser()
    const [isOpen, setOpen] = useState(false);
    const pathname = usePathname()

    const isActive = (path: string) => path === pathname;

    const toggleMenu = () => {
        setOpen(!isOpen);
    };

    const closeMenu = () => {
        setOpen(false)
    }


    return (
        (isLoaded && user) && (
        <nav className="container">
            <div className="nav-container">
                <div className={`nav-page ${isOpen ? 'active' : ''}`}>
                    {navLinks.map((link) => {
                        return (

                           

                                    <Link
                                        href={link.path}
                                        key={link.id}
                                        className={`navlink ${isActive(link.path) ? 'navlink-active' : ''}`}
                                        onClick={closeMenu}
                                    >
                                        {link.name}

                                    </Link>

                            

                        )
                    })}
                    <UserButton afterSignOutUrl="/sign-in" />
                </div>
                {isOpen ? (
                    <button className="btn-menu-close" onClick={toggleMenu}>
                        <Image className="menu" src={menu_close} alt="menu" />
                    </button>
                ) : (
                    <button className="btn-menu" onClick={toggleMenu}>
                        <Image className="menu" src={menu} alt="menu" />
                    </button>
                )}
            </div>
        </nav>
    )
    )
}
