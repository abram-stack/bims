import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link className='site-logo' to='/'>
        Console
        <br /> Botanesia
      </Link>
      <nav className='navbar'>
        <NavLink to='about'>About</NavLink>
        <NavLink to='projects'>Projects</NavLink>
        <NavLink to='https://brambimo.netlify.app/'>Resume</NavLink>
      </nav>
    </header>
  );
}