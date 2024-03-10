import work1 from '../img/work1.png'
import work2 from '../img/work2.png'
import work3 from '../img/work3.png'
import work4 from '../img/work4.png'
import Image from "next/image";

const listWorks = [
    {
        id: 1,
        img: <Image src={work1} className="work-img" alt="1" />,
        project: "Designing Dashboards",
        date: "2020",
        name: "Dashboard",
        p: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
        id: 2,
        img: <Image src={work2} className="work-img" alt="2" />,
        project: "Vibrant Portraits of 2020",
        date: "2018",
        name: "Illustration",
        p: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
        id: 3,
        img: <Image src={work3} className="work-img" alt="3" />,
        project: "36 Days of Malayalam type",
        date: "2018",
        name: "Typography",
        p: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
        id: 4,
        img: <Image src={work4} className="work-img" alt="4" />,
        project: "Components",
        date: "2021",
        name: "Components, Design",
        p: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },

]

export default function Works() {
    return (
        <div className="works">
            <h2>Featured works</h2>
            {listWorks.map((work) => {
                return (
                    <div key={work.id} className="work">
                        <div className='img-items'>
                            {work.img}
                        </div>
                        <div>
                            <h3>{work.project}</h3>
                            <h4><span className="work-date">{work.date}</span>{work.name}</h4>
                            <p>{work.p}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}