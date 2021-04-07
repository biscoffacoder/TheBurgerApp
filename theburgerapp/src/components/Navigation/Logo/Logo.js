import React from 'react'
import BurgerLogo from "../../../assets/burger-logo.png";
import "./Logo.css"
const Logo = (props) => {
    return (
        <div className="Logo" style={{height:props.height}}>
           <img src={BurgerLogo} alt="MyBurger"></img>
        </div>
    )
}

export default Logo
