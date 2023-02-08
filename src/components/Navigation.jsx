import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.jpg';
import spc from '../assets/shopping-cart.png';

export default function Navigation() {
    return (
        <div className="navbar">
            <Link to='/'>
                <img src={logo} className='logo-image' />
            </Link>
            <Link to='/' className="title">
                <h1>HORSE FARM</h1>
            </Link>
            <Link to='/shop'>
                <div>SHOP</div>
            </Link>
            <div className="shopping-cart-whole">
                <img src={spc} className='shopping-cart' />
                <div className="items">0</div>
            </div>
        </div>
    );
}