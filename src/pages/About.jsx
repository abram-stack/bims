import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <div className='about-container container'>
        <h3>I&apos;m a</h3>
        <p className='text-special'>Frontend developer</p>
        {/* TODO: Slider to show texts depends on the slide value. level 1, 2,3 */}
        <div className='slider'>
          <p>here goes slider</p>
        </div>
        <p>based in Frankfurt, Germany</p>

        <div className='chapter'>
          <h3 className='subtitle'>My Story</h3>
          <p className='description'>
            I appreciate you making it this far. So... Welcome to Console
            Botanesia!
          </p>
          <p className='description'>
            When I started my journey, I never considered myself clever enough
            to code. Starting my whole new life in my early 20's, I left my
            beloved country Indonesia in pursuit of my childhood dream: going
            abroad. Continuing my interest in computer science gave me a second
            chance to re-learn everything about the computer world, and of
            course about life.
          </p>
          <p className='description'>
            You might be wondering what Console Botanesia means? Inspired by one
            of the tribes of elders in Indonesia, my motivation for my career
            and journey as a human being is to give back to the nature and my
            community.
          </p>
          <p className='description'>
            And at the same time, programmers always have to stay in touch with
            our most beloved debugger, you know what, console.log! There you go.
            Two things that should never be taken for granted.
          </p>
          <p className='description'>
            Awesome, folks! Reach out to me on <Link className="link">myLinkedIn</Link>
          </p>
        </div>
      </div>
    </>
  );
}