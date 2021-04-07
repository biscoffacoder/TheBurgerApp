import React from 'react'
import "./NavItem.css"
const NavItem = (props) => {
    return (
        <div className="NavItem">
            <button className={props.active ? "active" :"button"} href={props.link}>{props.children}</button>
            </div>
    )
}

export default NavItem
