import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link className='site-logo' to='/'>
        Bram 
        <br /> Bimo
      </Link>
      <nav className='navbar'>
        <NavLink to='about'>About</NavLink>
        <NavLink to='projects'>Projects</NavLink>
        <NavLink to='https://brambimo.netlify.app/'>Resume</NavLink>
      </nav>
    </header>
  );
}