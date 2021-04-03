import React from 'react';
import "./BuildControl.css";
const BuildControl = props => {
    const ADD_ITEMS = [...props.menuItem];
    //<button onClick={()=>{buttonAction(item)}} key={index}>Add {item}</button>
    return (
        
        ADD_ITEMS.map((item, index) => {
            return (

                <div className="BuildControl" key={index}>

                    <div className="Label">{item.label}</div>
                    <button className="More" onClick={() => { props.added(item.label) }}>More</button>
                    <button className="Less" onClick={()=>{props.removed(item)}}>Less</button>
                </div>

            )
        })
    )
}

BuildControl.propTypes = {

}

export default BuildControl
