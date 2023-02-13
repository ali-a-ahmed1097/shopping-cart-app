import { nanoid } from "nanoid";
import React from "react";
import Item from "./Item";

export default function Cart(props) {
    const total = props.items.map(item => item.quantity * item.price).reduce((accumulator, currentValue) => accumulator + currentValue);

    const items = props.items.filter(item => item.quantity !== 0).map(it => <Item key={nanoid()} item={it} />)

    return (
        <div className="view-cart">
            {total
                ?
                items
                :
                <div>Your cart is empty!</div>
            }
            <div className="total">Total: ${total}.00</div>
        </div>
    )
}