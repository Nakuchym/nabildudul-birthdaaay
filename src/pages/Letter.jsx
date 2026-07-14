import React from "react";
import Typewriter from "typewriter-effect";
import {useNavigate} from "react-router-dom"; 
import "../App.css";

function Letter() {
    const navigate = useNavigate();

    return (
        <div className="app">
            <div className="title">
                <Typewriter
                    options={{
                        strings: ["dibukaaa yaa duullll"],
                        autoStart: true,
                        loop: true,
                        delay: 100,
                        deleteSpeed: 50
                    }}/>
            </div>
            <img className="floating-img" src="/img/dudul.webp" alt="letter"/>
            <div>
                <button className="btn" onClick={() => navigate("/")}>
                    balik
                </button>
                <button className="btn" onClick={() => navigate("/the-birthday-letter")}>KLIK AKUU</button>
            </div>
        </div>
    );
}

export default Letter;
