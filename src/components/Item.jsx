import React from "react";

export default function Item(props) {

    return (
        <div className="upper-cart-item">
            <div className="cart-item">
                <div className="remove" onClick={() => props.changeQuantity(props.item.name, -props.item.quantity)}>X</div>
                <img src={`../images/${props.item.img}`} />
                <div className="item-right">
                    <h1>{props.item.name}</h1>
                    <div>${props.item.price * props.item.quantity}.00</div>
                    <div className="quantity">
                        <div className="minus" onClick={() => props.changeQuantity(props.item.name, -1)}>-</div>
                        <div className="to-add">{props.item.quantity}</div>
                        <div className="plus" onClick={() => props.changeQuantity(props.item.name, 1)}>+</div>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    );
}