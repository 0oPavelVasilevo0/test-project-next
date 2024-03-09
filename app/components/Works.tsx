import work1 from '../img/work1.png'
import work2 from '../img/work2.png'
import work3 from '../img/work3.png'

import Image from "next/image";

export default function() {
    return (
        <div className="works">
            <h2>Featured works</h2>
            <div className="work">
                <div className="img-items">
                    <Image src={work1} className="work-img" alt="1" />
                </div>
                <div>
                    <h3>Designing Dashboards</h3>
                    <h4><span className="work-date">2020</span>Dashboard</h4>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>
            </div>
            <div className="work">
                <div className="img-items">
                    <Image src={work2} className="work-img" alt="2" />
                </div>
                <div>
                    <h3>Vibrant Portraits of 2020</h3>
                    <h4><span className="work-date">2018</span>Illustration</h4>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>
            </div>
            <div className="work">
                <div className="img-items">
                    <Image src={work3} className="work-img" alt="3" />
                </div>
                <div>
                    <h3>36 Days of Malayalam type</h3>
                    <h4><span className="work-date">2018</span>Typography</h4>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>
            </div>
        </div>
    )
}