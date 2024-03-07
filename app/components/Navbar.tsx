'use client'

import Image from "next/image";
import Link from "next/link";
import menu from '../img/menu.svg'
import menu_close from '../img/menu-close.svg'
import { useState } from "react";

export default function Navbar() {

    const [isOpen, setOpen] = useState(false);


    const toggleMenu = () => {
        setOpen(!isOpen);
    };

    const closeMenu = () => {
        setOpen(false)
    }

  return (
      <nav className="container">
          <div className="nav-container">
              <div className={`nav-page ${isOpen ? "active" : ""}`}>
                  <Link
                      href="/"
                      onClick={closeMenu}
                  >
                      Home
                  </Link>
                  {/* <Link
                href="/about"
              >
               Works
              </Link> */}
                  <Link
                      href="/about"
                      onClick={closeMenu}
                  >
                      Blog
                  </Link>
                  <Link
                      href="/about"
                      onClick={closeMenu}
                  >
                      Contacts
                  </Link>
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
