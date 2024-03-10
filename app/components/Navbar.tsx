'use client'

import Image from "next/image";
import Link from "next/link";
import menu from '../img/menu.svg'
import menu_close from '../img/menu-close.svg'
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
    { id: 1, name: "Home", path: "/home" },
    { id: 2, name: "About", path: "/home/about" },
    { id: 3, name: "Works", path: "/home/work" },
    { id: 4, name: "Contacts", path: "/home/contact" },
    { id: 5, name: "Logout", path: "/" },
]

export default function Navbar() {

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
                </div>
                {isOpen ? (
                    <button className="btn-menu-close" onClick={toggleMenu}>
                        <Image className="menu" src={menu_close} alt="menu"></Image>
                    </button>
                ) : (
                    <button className="btn-menu" onClick={toggleMenu}>
                        <Image className="menu" src={menu} alt="menu"></Image>
                    </button>
                )}
            </div>
        </nav>
    )
}
