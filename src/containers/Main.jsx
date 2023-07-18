import "./main.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSortAmountUp } from "@fortawesome/free-solid-svg-icons"
import { faFilter } from "@fortawesome/free-solid-svg-icons"
import {faEllipsisV} from "@fortawesome/free-solid-svg-icons"
import {faSortDown} from "@fortawesome/free-solid-svg-icons"
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons"
import {faChevronRight} from "@fortawesome/free-solid-svg-icons"
import Tom from "../assets/images/tom_cruise.jpg"
import Mat from "../assets/images/Matt Damon.jpg"
import Robert from "../assets/images/01.jpg"
import Christian from "../assets/images/02.jpg"
import Henry from "../assets/images/03.jpg"
import Chris from "../assets/images/04.jpg"
import Sam from "../assets/images/05.jpg"
import Steve from "../assets/images/06.jpeg"




const Main = ()=>{
    return (
        <div className="main">
           <div className="all_tickets">
            <h3>All tickets</h3>
            <div className="ticket_right">
                <p><span><FontAwesomeIcon icon={faSortAmountUp} /></span> Sort</p>
                <p><span><FontAwesomeIcon icon={faFilter} /></span> Filter</p>
            </div>
           </div>
           <div className="title_box">
                <div className="details"><span>Ticket details</span></div>
                <div className="costumers"><span>Costumer name</span></div>
                <div className="date"><span>Date</span></div>
                <div className="priority"><span>Priority</span></div>
            </div>
            <div className="title_box title__box--hover">
                <div className="details">
                    <img src={Tom} alt="Tom Cruise" width="46" height="46" />
                    <div className="details_item">
                        <h3>Contact Email not Linked</h3>
                        <span>Updated 1 day ago</span>
                    </div>
                </div>
                <div className="costumers">
                    <h3>Tom Cruise</h3>
                    <span>on 24.05.2019</span></div>
                <div className="date"><h3>May 26, 2019</h3><span>8:00 AM</span></div>
                <div className="priority">
                    <span className="as_btn high">HIGH</span>
                    <span className="dot_icon"><FontAwesomeIcon icon={faEllipsisV} /></span>
                </div>
            </div>
            <div className="title_box title__box--hover">
                <div className="details">
                    <img src={Mat} alt="Tom Cruise" width="46" height="46" />
                    <div className="details_item">
                        <h3>Adding Images to Featured Posts</h3>
                        <span>Updated 1 day ago</span>
                    </div>
                </div>
                <div className="costumers">
                    <h3>Matt Damon</h3>
                    <span>on 24.05.2019</span></div>
                <div className="date"><h3>May 26, 2019</h3><span>8:00 AM</span></div>
                <div className="priority">
                    <span className="as_btn low">LOW</span>
                    <span className="dot_icon"><FontAwesomeIcon icon={faEllipsisV} /></span>
                </div>
            </div>
            <div className="title_box title__box--hover">
                <div className="details">
                    <img src={Robert} alt="Tom Cruise" width="46" height="46" />
                    <div className="details_item">
                        <h3>When will I be charged this month?</h3>
                        <span>Updated 1 day ago</span>
                    </div>
                </div>
                <div className="costumers">
                    <h3>Robert Downey</h3>
                    <span>on 24.05.2019</span></div>
                <div className="date"><h3>May 26, 2019</h3><span>8:00 AM</span></div>
                <div className="priority">
                    <span className="as_btn high">HIGH</span>
                    <span className="dot_icon"><FontAwesomeIcon icon={faEllipsisV} /></span>
                </div>
            </div>
            <div className="title_box title__box--hover">
                <div className="details">
                    <img src={Christian} alt="Tom Cruise" width="46" height="46" />
                    <div className="details_item">
                        <h3>Payment not going through</h3>
                        <span>Updated 1 day ago</span>
                    </div>
                </div>
                <div className="costumers">
                    <h3>Christian Bale</h3>
                    <span>on 24.05.2019</span></div>
                <div className="date"><h3>May 26, 2019</h3><span>8:00 AM</span></div>
                <div className="priority">
                    <span className="as_btn normal">NORMAL</span>
                    <span className="dot_icon"><FontAwesomeIcon icon={faEllipsisV} /></span>
                </div>
            </div>
            <div className="title_box title__box--hover">
                <div className="details">
                    <img src={Henry} alt="Tom Cruise" width="46" height="46" />
                    <div className="details_item">
                        <h3>Unable to add replies</h3>
                        <span>Updated 2 day ago</span>
                    </div>
                </div>
                <div className="costumers">
                    <h3>Henry Cavil</h3>
                    <span>on 24.05.2019</span></div>
                <div className="date"><h3>May 26, 2019</h3><span>8:00 AM</span></div>
                <div className="priority">
                    <span className="as_btn high">HIGH</span>
                    <span className="dot_icon"><FontAwesomeIcon icon={faEllipsisV} /></span>
                </div>
            </div>
            <div className="title_box title__box--hover">
                <div className="details">
                    <img src={Chris} alt="Tom Cruise" width="46" height="46" />
                    <div className="details_item">
                        <h3>Downtime since last week</h3>
                        <span>Updated 3 day ago</span>
                    </div>
                </div>
                <div className="costumers">
                    <h3>Chris Evans</h3>
                    <span>on 24.05.2019</span></div>
                <div className="date"><h3>May 26, 2019</h3><span>8:00 AM</span></div>
                <div className="priority">
                    <span className="as_btn normal">NORMAL</span>
                    <span className="dot_icon"><FontAwesomeIcon icon={faEllipsisV} /></span>
                </div>
            </div>
            <div className="title_box title__box--hover">
                <div className="details">
                    <img src={Sam} alt="Tom Cruise" width="46" height="46" />
                    <div className="details_item">
                        <h3>Refferal Bouns</h3>
                        <span>Updated 3 day ago</span>
                    </div>
                </div>
                <div className="costumers">
                    <h3>Sam Smith</h3>
                    <span>on 24.05.2019</span></div>
                <div className="date"><h3>May 26, 2019</h3><span>8:00 AM</span></div>
                <div className="priority">
                    <span className="as_btn low">LOW</span>
                    <span className="dot_icon"><FontAwesomeIcon icon={faEllipsisV} /></span>
                </div>
            </div>
            <div className="title_box title__box--hover">
                <div className="details">
                    <img src={Steve} alt="Tom Cruise" width="46" height="46" />
                    <div className="details_item">
                        <h3>How do I change my password</h3>
                        <span>Updated 4 day ago</span>
                    </div>
                </div>
                <div className="costumers">
                    <h3>Steve Rogers</h3>
                    <span>on 24.05.2019</span></div>
                <div className="date"><h3>May 26, 2019</h3><span>8:00 AM</span></div>
                <div className="priority">
                    <span className="as_btn normal">NORMAL</span>
                    <span className="dot_icon"><FontAwesomeIcon icon={faEllipsisV} /></span>
                </div>
            </div>
            <div className="footer">
                <span className="footer_span">Row per pages:<span className="num_icon">8 <FontAwesomeIcon icon={faSortDown} /></span></span>
                <span className="footer_span">1-8 of 1240</span>
                <span className="footer_span">
                    <span className="footer_icon"><FontAwesomeIcon icon={faChevronLeft} /></span>   
                    <span className="footer_icon"><FontAwesomeIcon icon={faChevronRight} /></span>
                </span>
            </div>
        </div>
    )
}
export default Main