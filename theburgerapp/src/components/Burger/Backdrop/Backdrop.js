import React from 'react'
import "./Backdrop.css"
const Backdrop = (props) => {
    console.log(props);
    return (
        <div>
            {props.show ? <div className="Backdrop"></div>:null}
        </div>
    )
}

export default Backdrop
