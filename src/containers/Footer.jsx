import Details from "../components/Details"
import All from "../components/All"
import "./footer.scss"

const Footer = ()=>{
    return(
        <div className="footer_flex">
            <Details/>
            <All/>
        </div>
    )
}

export default Footer