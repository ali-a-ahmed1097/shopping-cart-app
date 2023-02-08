import React from "react";

export default function Card(props) {
    function handleClick(event) {
        console.log(event.target);
    }
    return (
        <div className="card" onClick={handleClick}>
            <img src={`./images/${props.horse.img}`} alt="" />
            <div className="bottom-card">
                <div>${props.horse.price}.00</div>
                <div>{props.horse.name}</div>
                <button>Add to cart</button>
            </div>
        </div>
    );
}