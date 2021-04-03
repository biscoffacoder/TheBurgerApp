import React, { useEffect, useState } from 'react';
import Auxillary from "../../hoc/Auxillary";
import Burger from './../../components/Burger/Burger';
import BuildControl from './../../components/Burger/BurgerBuildControl/BuildControl';
import "./BurgerBuilder.css";
import Modal from "../../components/Burger/Modal/Modal"
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const BurgerBuilder = (props) => {
    const [ingred, setIngred] = useState([]);
    const [price, setPrice] = useState();
    const [allIngredPrice, setAllIngredPrice] = useState([]);
    const [id, setId] = useState();

    const ADD_ITEMS = [
        { label: "Cheese", price: 30, type: "cheese" },
        { label: "Bacon", price: 55, type: "bacon" },
        { label: "Meat", price: 80, type: "meat" },
        { label: "Salad", price: 25, type: "salad" }]

    useEffect(() => {
        let burgerbase = [

            { label: "Bread-Top", type: "bread-top", price: 20 },
            { label: "Bread-Bottom", type: "bread-bottom", price: 20 }];
        setIngred(burgerbase);
        setPrice(40);

        setAllIngredPrice(ADD_ITEMS);
        console.log("Useeffect")
        setId(7);
    }, []);

    const addItem = (item) => {

        let selectedIngred = [...ingred];
        let currObj = allIngredPrice.find((val) => { return val.label === item });
        console.log(currObj);
        
        let burgerBottom = selectedIngred.pop();

        selectedIngred.push(currObj);
        selectedIngred.push(burgerBottom);
        setIngred(selectedIngred)

        let priceNew = currObj.price + price;
        setPrice(priceNew);


    }
    const removeItem = (item, index) => {
        let selectedIngred = [...ingred];
        console.log(selectedIngred);
        let ind = selectedIngred.findIndex((val) => { return val.label === item.label });
        if (ind > 0) {
            console.log(ind);

            selectedIngred.splice(ind, 1);
            setIngred(selectedIngred);
            let newRate = price - item.price;
            setPrice(newRate);

        }



    }
    let order = null;
    const purchase = () => {
        if (price > 40) {
            order = "This order can be added to cart";
            console.log("Inside order")

        }

    }


    return (
        <Auxillary>

            <div className="BurgerBuilder">
                <Burger ingredients={ingred} />
                <button className="OrderButton" onClick={purchase}> ORDER NOW</button>
                <p >{order}</p>
            </div>
            <Modal>
                <OrderSummary ingredients={ingred} menu={ADD_ITEMS}/>
            </Modal>

            <div className="BurgerBuilder">
                <h3>Price - ${price}</h3>
                <BuildControl menuItem={ADD_ITEMS} added={addItem} removed={removeItem} />
            </div>



        </Auxillary>
    )
}

export default BurgerBuilder
