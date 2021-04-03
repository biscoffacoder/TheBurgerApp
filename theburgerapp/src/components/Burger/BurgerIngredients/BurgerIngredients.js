import React from 'react'
import './BurgerIngredients.css';

const BurgerIngredients = (props) => {
    let ingredient = null;

    switch (props.name) {
        case ('bread-bottom'):
            ingredient = <div className="BreadBottom"><p>BreadBottom</p></div>;
            break;
        case ('bread-top'):
            ingredient = (
                <div className="BreadTop">
                    <div className="Seeds1"><p>Seeds1</p></div>
                    <div className="Seeds2"><p>Seeds2</p></div>
                    <p>Bread Top</p>
                    
                </div>
            );
            break;
        case ('meat'):
            ingredient = <div className="Meat"><p>Meat</p></div>;
            break;
        case ('cheese'):
            ingredient = <div className="Cheese"><p>Cheese</p></div>;
            break;
        case ('bacon'):
            ingredient = <div className="Bacon"><p>Bacon</p></div>;
            break;
        case ('salad'):
            ingredient = <div className="Salad"><p>Salad</p></div>;
            break;
        default:
            ingredient = null;
    }


    return (
        <div>
            {ingredient}
        </div>
    )
}

export default BurgerIngredients
