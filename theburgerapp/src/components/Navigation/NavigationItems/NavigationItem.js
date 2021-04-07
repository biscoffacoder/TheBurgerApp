import React from 'react'
import "./NavigationItems.css"
import NavItem from './NavItem';
const NavigationItem = (props) => {
    return (

        <div className="NavigationItem">
            <NavItem active={true} link="/">
                BurgerBuilder
               </NavItem>
            <NavItem active={false} link="/">
                Checkout
               </NavItem>
        </div>

    )
}

export default NavigationItem
