import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { nanoid } from "nanoid";
import { horseData } from './assets/horse-data';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Shop from './components/Shop';
import Cart from './components/Cart';
import HorsePage from './components/HorsePage';


export default function App() {
    const [cart, setCart] = React.useState(horseData.map(horse => ({ ...horse, quantity: 0 })));
    const [cartCount, setCartCount] = React.useState(0);

    function increaseCart(name, i = 1) {
        setCartCount(prev => prev + i);

        setCart(prev => prev.map(horse => {
            return horse.name === name ?
                {...horse, quantity: horse.quantity + i } // true
                : horse; // false
        }));
    }

    const horseRoutes = horseData.map(horse => <Route key={nanoid()} path={`/shop${horse.link}`} element={<HorsePage horse={horse} addToCart={increaseCart} />} />);

    return (
        <BrowserRouter>
            <Navigation count={cartCount} />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/shop' element={<Shop horses={horseData} addToCart={increaseCart} />} />
                <Route path='/cart' element={<Cart items={cart} func={increaseCart} />} />
                {horseRoutes}
            </Routes>
        </BrowserRouter>
    );
}