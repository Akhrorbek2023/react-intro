import "./details.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faCircle}  from "@fortawesome/free-solid-svg-icons";
import {faCircleCheck}  from "@fortawesome/free-solid-svg-icons";



const All = ()=>{
    return(
        <div className="details_box">
            <div className="flex_details">
                <h3>Unresolved Tickets</h3>
                <a href="#">View all</a>
            </div>
            <span className="group">Today</span>
            <div className="row_box">
                <span>Create new task</span>
                <p className="row_box-plus">+</p>
            </div>
            <div className="row_box row_box-border">
                <h3><span className="not_fill"><FontAwesomeIcon icon={faCircle} /></span> Finis ticket update</h3>
                <p className="row_box-btn yellov">URGENT</p>
            </div>
            <div className="row_box row_box-border">
                <h3><span className="not_fill"><FontAwesomeIcon icon={faCircle} /></span> Create new ticket example</h3>
                <p className="row_box-btn green">NEW</p>
            </div>
            <div className="row_box row_box-border">
                <h3><span className="fill"><FontAwesomeIcon icon={faCircleCheck} /></span> Update ticket report</h3>
                <p className="row_box-btn default">DEFAULT</p>
            </div>
        </div>
    )
}
export default All