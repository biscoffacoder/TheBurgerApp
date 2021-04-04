import React from 'react'

const OrderSummary = (props) => {
    //<li key={item.label}> <span style = {{textTransform:'capitalize'}}>{item}</span>:{props.ingredients[item.label]}</li>
    let orderValues = [...props.ingredients];
    let couObj = [{ label: "Cheese", count: 0 },
    { label: "Bacon", count: 0 },
    { label: "Meat", count: 0 },
    { label: "Salad", count: 0 }
    ]
    couObj.map((item) => { orderValues.map((val) => { return (val.label === item.label ? ++item.count : "") }) })

    console.log(couObj);
    return (
        <div>
            <h3>YOUR ORDER</h3>
            {couObj.map((item, index) => { return (<li key={index}>{item.label} : {item.count}</li>) })}
        </div>
    )
}

export default OrderSummary
