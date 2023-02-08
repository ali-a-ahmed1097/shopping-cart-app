import React from "react";

export default function Card(props) {
    return (
        <div className="card">
            <img src={`./images/${props.horse.img}`} alt="" />
            <div className="bottom-card">
                <div>${props.horse.price}.00</div>
                <div>{props.horse.name}</div>
                <button>Add to cart</button>
            </div>
        </div>
    );
}