import React from "react";

export default function Item(props) {
    return (
        <div className="cart-item">
            <img src={`../images/${props.item.img}`} />
            <h1>{props.item.name}</h1>
            <div>${props.item.price}.00</div>
        </div>
    );
}