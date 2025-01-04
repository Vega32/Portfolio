import './Header.css'
import githubIcon from './assets/github-mark-white.svg'
import itchioIcon from './assets/itchio-logo-textless-white.svg'
import linkediIcon from './assets/linkedinIcon.svg'

export default function Header() {
  return (
    <header className='header'>
        
        <div className='icon_container'>
          <a href='https://github.com/Vega32'>
            <img className='icon' src={githubIcon}/>
          </a>
          <a href='https://starscourgevega.itch.io/'>
            <img className='icon' src={itchioIcon}/>
          </a>
          <a href='https://www.linkedin.com/in/omar-hammodan-060a98272/'>
            <img className='icon' src={linkediIcon}/>
          </a>
        </div>
        
        
    </header>
  )
}
