import '../../styles/main.css'
import Header from '@/app/components/Header';
import Posts from '@/app/components/Posts';
import Works from '@/app/components/Works';

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
