
import Experience from '../components/Experience';
import Hero from '../components/Hero';
import Journey from '../components/Journey';
import ProjectsList from '../components/ProjectsList';
import Services from '../components/Services';

export default function Home() {
  
  async function useFetch() {
    const res = await fetch('/api/vans')
    const data = await res.json()
    return data
  }

  const data = useFetch()
  console.log(data)
  return (
    <>
      <div className='home-container'>
        <Hero />
        <Journey />
        <Services/>
        <Experience />
        <ProjectsList/>
      </div>
    </>
  );
}
