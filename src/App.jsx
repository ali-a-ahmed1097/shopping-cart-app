import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { horseData } from './assets/horse-data';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Shop from './components/Shop';


export default function App() {
    return (
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/shop' element={<Shop horses={horseData} />} />
            </Routes>
        </BrowserRouter>
    );
}