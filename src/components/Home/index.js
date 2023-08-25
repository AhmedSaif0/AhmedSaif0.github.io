import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo_A.png'
import Logo from './Logo'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"


const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')


  const nameArray = ['h', 'm', 'e', 'd','','s','a','i','f']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(()=>{
    setTimeout(()=>{
      setLetterClass('text-animate-hover')
    },3000)
  })

  return (
<>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img
              src={logo}
              alt="JavaScript Developer Name, Web Developer Name"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Front End Developer / JavaScript Expert</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>

 {/* social media links */}
 <ul>
                <li> 
                    <a 
                      href="#"
                      target="_blank"
                      rel="norefferrer" 
                    >
                     <FontAwesomeIcon icon={faLinkedin}/> 
                     </a>
                </li>
                <li> 
                    <a
                        href="#"
                         target="_blank"
                         rel="norefferrer" 
                >
                     <FontAwesomeIcon icon={faFacebook}/>
                     </a>
                </li>
                <li>
                     <a
                        href="#"
                         target="_blank"
                         rel="norefferrer" 
                >
                    <FontAwesomeIcon icon={faTwitter}/> 
                    </a>
                </li>
            </ul>

        </div>
      <Logo />
      </div>
      <Loader type='semi-circle-spin'/>

</>
  )
}

export default Home
