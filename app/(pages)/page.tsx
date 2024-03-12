import Header from '../components/Header';
import Posts from '../components/Posts/Posts';
import Works from '../components/Works/Works';
// import '../styles/main.css'

export default function Home() {

  return (
    <div className="container">
      <div className="page">
        <Header />
        <Posts />
        <Works />
      </div>
    </div>
  );
}
