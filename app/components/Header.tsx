import Image from "next/image";
import Button from "./Button";
import photo from '../img/bolvan.png'

export default function Header() {
    return (
        <header className="header-container">
            <div className="header">
                <h1>
                    Hi, I am John, Creative Technologist
                </h1>
                <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>
                <Button />
            </div>
            <div className="header-photo">
                <Image src={photo} className="photo" alt="bolvan" />
                <span className="elipse"></span>
            </div>
        </header>
    )
}