import React from "react";
import { Link } from "react-router-dom";

export default function HorsePage(props) {
    const [quantity, setQuantity] = React.useState(1);

    function changeQuantity(c) {
        setQuantity(prevQuantity => prevQuantity + c < 1 ? prevQuantity : prevQuantity + c);
    }

    return (
        <div className="full-horse">
            <img src={`../../images/${props.horse.img}`} />
            <div className="right-side">
                <h1>{props.horse.name}</h1>
                <div>${props.horse.price}.00</div>
                <div className="quantity">
                    <div className="minus" onClick={() => changeQuantity(-1)}>-</div>
                    <div className="to-add">{quantity}</div>
                    <div className="plus" onClick={() => changeQuantity(1)}>+</div>
                </div>
                <button className="add" onClick={() => props.addToCart(props.horse.name, quantity)}>Add to cart</button>
                <Link to="/shop">
                    <div>{'<'} Back</div>
                </Link>
            </div>
        </div>
    );
}