'use client'

// import img from './../../public/Resume.pdf'

export default function Button() {
    return (
        <button className="btn">
            {/* <span>{img}</span> */}
            {/* <a href="public/Resume.pdf" target="blank" download='Resume.pdf'> */}
            <a href='./../../public/Resume.pdf' target="blank" download='Resume.pdf'>
                Download Resume
            </a>
        </button>
    )
}