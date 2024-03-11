import Image from "next/image"
import { listWorks } from "./listWorks"

export default function Works() {
    return (
        <div className="works">
            <h2>Featured works</h2>
            {listWorks.map((work) => {
                return (
                    <div key={work.id} className="work">
                        <div className='img-items'>
                            <Image src={work.img} className="work-img" alt={work.alt} />
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