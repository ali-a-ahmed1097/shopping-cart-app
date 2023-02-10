import React from "react";
import Card from "./Card";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";

export default function Shop(props) {

    const horseCards = props.horses.map(horse => (
        <Link key={nanoid()} to={`/shop${horse.link}`}>
            <Card horse={horse} addToCart={props.addToCart} />
        </Link>
    ));

    return (
        <div className="catalog">
            {horseCards}
        </div>
    );
}