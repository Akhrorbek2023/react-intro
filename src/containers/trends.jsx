import "./trends.scss"

const Trends = ()=>{
    return (
        <div className="trends">
            <div className="trends_content">
                <h3>Todays's trends</h3>
                <div className="flex_content">
                <div className="trends_content-left">
                    <span>as of 25 May 2019, 09:41 PM</span>    
                </div>
                <div className="trends_content-right">
                    <span><span className="minus">-</span>Today</span>
                    <span><span className="minus">-</span>Yesterday</span>
                </div>
                </div>
            </div>
            <div className="trends_sidebar">
                <div className="box_bar">
                    <span>Resolved</span>
                    <h3>449</h3>
                </div>
                <div className="box_bar">
                <span>Received</span>
                    <h3>426</h3>
                </div>
                <div className="box_bar">
                <span>Average first response time</span>
                    <h3>33m</h3>
                </div>
                <div className="box_bar">
                    <span>Average response time</span>
                    <h3>3h 8m</h3>
                </div>
                <div className="box_bar">
                    <span>resolution within SLA</span>
                    <h3>94%</h3>
                </div>
            </div>
        </div>
    )
}

export default Trends