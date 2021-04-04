import React from 'react'
import "./Modal.css"
import Auxillary from "../../../hoc/Auxillary"
import Backdrop from '../Backdrop/Backdrop';
const Modal = (props) => {
    console.log(props);
    let legitness = props.children.props.isLegit;

    return (
        <Auxillary>
            <Backdrop show={legitness} />
            {legitness ?<div className="Modal">
               
               {props.children}</div>  : null}
            
        </Auxillary>
    )
}

export default Modal
