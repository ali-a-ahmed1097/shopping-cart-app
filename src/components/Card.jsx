import React from "react";

export default function Card(props) {
    function handleClick(event) {
        if (event.target.className)
            event.preventDefault();
    }
    return (
        <div className="card" onClick={handleClick}>
            <img src={`./images/${props.horse.img}`} alt="" />
            <div className="bottom-card">
                <div>${props.horse.price}.00</div>
                <div>{props.horse.name}</div>
                <button className="add">Add to cart</button>
            </div>
        </div>
    );
}