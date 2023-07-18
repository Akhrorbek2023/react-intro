import "./boxes.scss"

const Boxes = ()=>{
    return(
        <div className="box_holder">
            <div className="box_item">
                <span>Unresolved</span>
                <h3>60</h3>
            </div>
            <div className="box_item">
                <span>Overdue</span>
                <h3>16</h3>
            </div>
            <div className="box_item">
                <span>Open</span>
                <h3>43</h3>
            </div>
            <div className="box_item">
                <span>On hold</span>
                <h3>64</h3>
            </div>
        </div>
    )
}

export default Boxes