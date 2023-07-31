import { Link, NavLink } from "react-router-dom"
import './index.scss'
import logoA from '../../assets/images/logo-s.png'
import logoSub from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"


const Sidebar = () => {
    return (
        <div className="nav-bar">
            <Link className="logo" to='/' >
                <img src={logoA} alt="" />
                <img className="sublogo" src={logoSub} alt=''/>
            </Link>
        <nav>
            <NavLink exact='true' 
            activeClassname='active'
             to='/'
             className="Home">
                <FontAwesomeIcon icon={faHome} />
            </NavLink>

            <NavLink exact='true'
             activeClassname='active'
              to='about'
              className="about"
              >
                <FontAwesomeIcon icon={faUser} />
            </NavLink>

            <NavLink exact='true'
             activeClassname='active' 
             to='contact'
             className="contact">
                <FontAwesomeIcon icon={faEnvelope} />
            </NavLink>
            
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

        </nav>
        </div>
    )
}
export default Sidebar