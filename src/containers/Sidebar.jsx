import "./sidebar.scss"
import Logo from "../assets/images/icons/logo.svg"
import Chart from "../assets/images/icons/chart.svg"
import Ticket from "../assets/images/icons/ticket.svg"
import Ideas from "../assets/images/icons/ideas.svg"
import Contact from "../assets/images/icons/contact.svg"
import Agent from "../assets/images/icons/agent.svg"
import Article from "../assets/images/icons/article.svg"
import Setting from "../assets/images/icons/setting.svg"
import Sub from "../assets/images/icons/sub.svg"




const Sidebar = ()=>{
    return(
        <div className="sidebar">
            <div className="btn__title">
                <img src={Logo} alt="" />
                <a href="#">Dashboard Kit</a>
            </div>
            <div className="btn">
                <img src={Chart} alt="" /> 
                <button> Overview</button>
            </div>
            <div className="btn">
                <img src={Ticket} alt="" /> 
                <button> Ticket</button>
            </div>
            <div className="btn">
            <img src={Ideas} alt="" />
                <button>  Ideas</button>
            </div>
            <div className="btn">
            <img src={Contact} alt="" /> 
                <button> Contact</button>
            </div>
            <div className="btn">
            <img src={Agent} alt="" /> 
                <button> Agent</button>
            </div>
            <div className="btn">
            <img src={Article} alt="" />
                <button>  Article</button>
            </div>
            <div className="btn">
            <img src={Setting} alt="" /> 
                <button> Setting</button>
            </div>
            <div className="btn">
            <img src={Sub} alt="" />
                <button>  Substations</button>
            </div>

        </div>
    )
}

export default Sidebar