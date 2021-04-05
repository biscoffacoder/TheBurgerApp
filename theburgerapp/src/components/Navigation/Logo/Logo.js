import React from 'react'
import BurgerLogo from "../../../assets/burger-logo.png";
import "./Logo.css"
const Logo = () => {
    return (
        <div className="Logo">
           <img src={BurgerLogo} alt="MyBurger"></img>
        </div>
    )
}

export default Logo
