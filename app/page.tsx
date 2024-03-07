import Image from "next/image";
import './styles/main.css'
import photo from './img/bolvan.png'
import work1 from './img/work1.png'
import work2 from './img/work2.png'
import work3 from './img/work3.png'
import Button from "./components/Button";

export default function Home() {

  return (
    <div className="container">
      <div className="page">
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
        <div className="posts-container">
          <div className="post-header">
              <h3>Recent posts</h3>
              <a href="">View all</a>
          </div>
          <div className="posts">
            <div className="post">
              <h2>Making a design system from scratch</h2>
              <p className="date">12 Feb 2020<span className="line"></span>Design, Pattern</p>
              <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
            <div className="post">
              <h2>Creating pixel perfect icons in Figma</h2>
              <p className="date">12 Feb 2020<span className="line"></span>Figma, Icon Design</p>
              <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
          </div>
        </div>
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
      </div>
    </div>
  );
}
