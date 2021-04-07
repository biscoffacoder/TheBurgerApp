import React from 'react'
import Logo from '../Logo/Logo'
import NavigationItem from '../NavigationItems/NavigationItem'
import "./Toolbar.css"
const Toolbar = (props) => {
    return (
        <header className="Toolbar">
            <Logo height="80%"/>
            <div>MENU</div>
            <nav className="DesktopOnly">
                <NavigationItem/>
            </nav>
        </header>
    )
}

export default Toolbar
