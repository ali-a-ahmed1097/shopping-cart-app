import React from "react";
import background from '../assets/home-background.mp4';

export default function Home() {
    return (
        <div className="home">
            <video playsInline={true} autoPlay={true} muted={true} loop={true} id="myVideo">
                <source src={background} type="video/mp4" />
            </video>
        </div>
    );
}