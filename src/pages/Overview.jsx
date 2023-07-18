import Sidebar from "../containers/Sidebar"



import "./overview.scss"
import OverviewNavbar from "../containers/Navbar"
import Boxes from "../containers/boxes"
import Trends from "../containers/trends"
import Footer from "../containers/Footer"

const Overview = ()=>{
    return (
        <div className="Overview">
            <Sidebar/>
            <div className="overview_content">
                <OverviewNavbar/>
                <Boxes/>
                <Trends/>
                <Footer/>
            </div>
        </div>
    )
}

export default Overview