import React from 'react'
import Logo from '../Logo/Logo'
import NavigationItem from '../NavigationItems/NavigationItem'
import "./SideDrawer.css"
const SideDrawer = (props) => {

    return (
        <div className="SideDrawer">
            <Logo height="11%"></Logo>
            <nav>
                <NavigationItem></NavigationItem>
            </nav>
        </div>
    )
}

export default SideDrawer
