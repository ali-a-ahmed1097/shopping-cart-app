import React from "react";
import Card from "./Card";
import { nanoid } from "nanoid";

export default function Shop(props) {

    const horseCards = props.horses.map(horse => <Card key={nanoid()} horse={horse} /> );

    return (
        <div className="catalog">
            {horseCards}
        </div>
    );
}