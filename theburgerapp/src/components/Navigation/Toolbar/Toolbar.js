import React from 'react'
import Logo from '../Logo/Logo'
import "./Toolbar.css"
const Toolbar = (props) => {
    return (
        <header className="Toolbar">
            <Logo />
            <div>MENU</div>
            <nav className="nav"></nav>
        </header>
    )
}

export default Toolbar
