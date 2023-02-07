import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
    return (
    <div className="navbar">
        <Link to='/'>
            <h1>Shopping Cart</h1>
        </Link>
        <Link to='/shop'>
            <div>SHOP</div>
        </Link>
    </div>
    );
}