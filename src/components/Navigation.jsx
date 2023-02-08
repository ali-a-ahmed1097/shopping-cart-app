import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.jpg';

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
        </div>
    );
}