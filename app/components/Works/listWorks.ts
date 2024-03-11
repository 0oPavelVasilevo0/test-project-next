import { StaticImageData } from 'next/image'
import work1 from '../../img/work1.png'
import work2 from '../../img/work2.png'
import work3 from '../../img/work3.png'
import work4 from '../../img/work4.png'

//kakaia je hyita etot typescript...

interface Work {
    id: number;
    img: StaticImageData;
    alt: string;
    project: string;
    date: string;
    name: string;
    p: string;
}

const listWorks: Work[] = [
    {
        id: 1,
        img: work1,
        alt: "1",
        project: "Designing Dashboards",
        date: "2020",
        name: "Dashboard",
        p: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
        id: 2,
        img: work2,
        alt: "2",
        project: "Vibrant Portraits of 2020",
        date: "2018",
        name: "Illustration",
        p: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
        id: 3,
        img: work3,
        alt: "3",
        project: "36 Days of Malayalam type",
        date: "2018",
        name: "Typography",
        p: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
        id: 4,
        img: work4,
        alt: "4",
        project: "Components",
        date: "2021",
        name: "Components, Design",
        p: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },

]

export { listWorks };