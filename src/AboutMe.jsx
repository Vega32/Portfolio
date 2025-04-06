import SynthSunset from './assets/SynthSunset.png'
import './AboutMe.css'

export default function AboutMe() {
  return (
    <div className='about_div'>
        <div className='sunset_div'>
            <img className='sunset' src={SynthSunset}/>
        </div>
        <div className='about_p'>
            <h1>I'm Omar</h1>
            <p>I’m a software engineer student with multiple years of software development experience under my belt. I’ve always been very passionate about this field. I’ve work on countless projects which has led me to experiment with all sorts of languages and technologies. This includes a wide range from low level development with C to high level with the likes of Python. I’m pretty resourceful when it comes to problem solving and can quickly learn the skills needed for a new endeavor. Here are just a couple of projects I’ve worked on. </p>
        </div>
    </div>
  )
}
