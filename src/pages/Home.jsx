import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Journey from '../components/Journey';

export default function Home() {
  return (
    <>
      <div className='home-container container'>
        <Hero />
        <Journey />
        
        <h3>Do you want to see some of my work during my quest?</h3>
        <Link to='projects'>My Projects</Link>
      </div>
    </>
  );
}
