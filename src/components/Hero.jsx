import { Link } from 'react-router-dom';
import avatar from '../assets/images/avatar.jpg';
import { BiLogoGithub, BiLogoLinkedin, BiLogoTwitter } from 'react-icons/bi';

export default function Hero() {
  return (
    <>
      <div className='hero-container container'>
        <div className='hero-greeting'>
          <div className='greeting'>
            <h1>Ei Gude!</h1>
            <h1>
              I&apos;m <span className='text-special'>Bram</span>
            </h1>
          </div>
        </div>
        <img src={avatar} className='avatar' />

        <h3 className='subtitle'>Frontend explorer</h3>
        <p>
          Just scratched the surface of the frontend world, amazed and heading
          forward to discover the rest of the web dev world.
        </p>
        <div className='social-container'>
          <Link className='social'>
            <BiLogoTwitter />
          </Link>
          <Link className='social'>
            <BiLogoLinkedin />
          </Link>
          <Link className='social'>
            <BiLogoGithub />
          </Link>
        </div>
      </div>


    </>
  );
}
