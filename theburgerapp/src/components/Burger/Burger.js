import React from 'react'

import BurgerIngredient from './BurgerIngredients/BurgerIngredients';

const Burger = (props) => {
    let burgerIng = [...props.ingredients];
    console.log(props);

    return (
        <div>
            {
                burgerIng.map((item, index) => {
                    return (<BurgerIngredient name={item.type} key={index} />
                    )
                })
            }
            <button  onClick={()=>{props.purchased(props.curPrice)}}> ORDER NOW</button>
        </div>
    )
}

export default Burger
