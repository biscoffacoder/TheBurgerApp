import React from 'react'

import BurgerIngredient from './BurgerIngredients/BurgerIngredients';

const Burger = (props) => {
    let burgerIng = [...props.ingredients];
   
    return (
        <div>
            {
                burgerIng.map((item,index) => {
                    return (<BurgerIngredient name={item.type} key={index} />
                    )
                })
            }

        </div>
    )
}

export default Burger
