import "./details.scss"


const Details = ()=>{
    return(
        <div className="details_box">
            <div className="flex_details">
                <h3>Unresolved Tickets</h3>
                <a href="#">View details</a>
            </div>
            <span className="group">Group:<strong>Support</strong></span>
            <div className="row_box">
                <h3>Waiting on Feature Request</h3>
                <span>4238</span>
            </div>
            <div className="row_box row_box-border">
                <h3>Awaiting Costumers response</h3>
                <span>1005</span>
            </div>
            <div className="row_box row_box-border">
                <h3>Awaiting Developer Fix</h3>
                <span>914</span>
            </div>
            <div className="row_box row_box-border">
                <h3>Pending</h3>
                <span>281</span>
            </div>
        </div>
    )
}
export default Details