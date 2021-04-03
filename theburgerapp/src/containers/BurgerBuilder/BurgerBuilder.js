import React, { useEffect, useState } from 'react';
import Burger from './../../components/Burger/Burger';
import BuildControl from './../../components/Burger/BurgerBuildControl/BuildControl';
import "./BurgerBuilder.css";


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
    useEffect(()=>{
        console.log("price of the burger " + price);
    },[price])
    const addItem = (item) => {

        let selectedIngred = [...ingred];
        let currObj = allIngredPrice.find((val) => { return val.label === item });
        console.log(currObj);
        currObj.id = id + 1;
        setId(currObj.id);
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
        let ind = selectedIngred.findIndex((val)=>{return val.label===item.label});
        if(ind>0)
        {
            console.log(ind);
            
            selectedIngred.splice(ind,1);
            setIngred(selectedIngred);
            let newRate = price - item.price;
            setPrice(newRate);

        }



    }
    return (
        <div >
            <div className="BurgerBuilder">
                <BuildControl menuItem={ADD_ITEMS} added={addItem} removed={removeItem} />
            </div>
            <div className="BurgerBuilder">
                <Burger ingredients={ingred} />
            </div>


        </div>
    )
}

export default BurgerBuilder
