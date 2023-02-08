import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { nanoid } from "nanoid";
import { horseData } from './assets/horse-data';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Shop from './components/Shop';


export default function App() {
    const horseRoutes = horseData.map(horse => <Route key={nanoid()} path={`/shop${horse.link}`} element={<Shop horses={horseData} />} /> );

    return (
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/shop' element={<Shop horses={horseData} />} />
                {horseRoutes}
            </Routes>
        </BrowserRouter>
    );
}