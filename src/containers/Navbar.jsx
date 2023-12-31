import "./navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Profile from "../assets/images/icons/profile_pic.png"
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const Navbar = ()=>{
    return(  
        <div className="navbar">
            <div className="navbar__left">
                 <h2>Tickets</h2>
            </div>
            <div className="navbar__right">
                <div className="not">
                <FontAwesomeIcon icon={faSearch} />
                </div>
            
            <div className="not">
            <FontAwesomeIcon icon={faBell} />
            </div>
            <p>Jones Ferdinant</p>
            <img className="not" src={Profile} alt="" />
            </div>
        </div>
    )
}

export default Navbar