import React from "react";

export default function Cart(props) {
    const total = props.items.map(item => item.quantity * item.price).reduce((accumulator, currentValue) => accumulator + currentValue);
    return (
        <div className="view-cart">
            <div className="total">Total: ${total}.00</div>
        </div>
    )
}