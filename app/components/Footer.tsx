'use client'

import Image from "next/image";
import fb from '../img/fb.svg'
import insta from '../img/insta.svg'
import group from '../img/Group.svg'
import linkedin from '../img/Linkedin.svg'
import { useUser } from "@clerk/nextjs";

export default function Footer() {

    const { user, isLoaded } = useUser()

    return (
        (isLoaded && user) && (
            <footer className="contact">
                <div className="contact-item">
                    <a href="https://www.facebook.com/" target="blank">
                        <Image src={fb} className="contact-icon" alt="fb" />
                    </a>
                    <a href="https://www.instagram.com/" target="blank">
                        <Image src={insta} className="contact-icon" alt="insta" />
                    </a>
                    <a href="https://twitter.com/" target="blank">
                        <Image src={group} className="contact-icon" alt="group" />
                    </a>
                    <a href="https://www.linkedin.com/" target="blank">
                        <Image src={linkedin} className="contact-icon" alt="linkedin" />
                    </a>
                </div>
                <p>Copyright ©2020 All rights reserved </p>
            </footer>
        )
    )
}