import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 

function TheBirthdayLetter() {
    const navigate = useNavigate();
    const [popupImage, setPopupImage] = useState(null);

    const openPopup = (imageSrc) => {
        setPopupImage(imageSrc);
    };

    const closePopup = () => {
        setPopupImage(null);
    };

    return (
        <div className="app">
            <div className="paper">
                <div className="letter">
                    <p>
                        HAAPPYYBIRTHDAAYYY dudulmagnuscarlsen aliaas????? yang ke 18!!!</p>
                    <p>
                        semoga jadi orang yang BAIK (lu jahat), panjang umur, sehat selalu, dimudahkan 
                        rezekinya,dan cita-citanya tercapaaaai!!! (jadi bupati di umur 55 taun dan 
                        buka praktik di pulau panjang jir)
                    </p>
                    <p>
                       semogaa di perkuliahan nanti kau dikelilingi orang2 baaiikk, semua yang baik 
                       datang ke kau. semogaa di masa depan nanti kau bisa ngebahagiain orang tuamu 
                       yaah duuulll. btw selamat ketemu org baik nan rendah hati ini ❤️
                    </p>
                    <p style={{ textAlign: "right", marginBottom: "-4px" }}>sincerely,</p>
                    <p style={{ textAlign: "right", marginTop: 0 }}>bileelll terkeren terjago terhebat</p>
                </div>
            </div>

            <div className="title">
                <p>BACAA DEH PESAN SINGKAT AKU</p>
            </div>
            <div className="img-btn">
                <button className="img-button" onClick={() => openPopup("img/1.png")}>
                    <img src="img/4.png" alt="letter" className="img-small"/>
                    <span className="btn-text">di masa depan..</span>
                </button>
                <button className="img-button" onClick={() => openPopup("img/2.png")}>
                    <img src="img/5.png" alt="letter" className="img-small"/>
                    <span className="btn-text">harapan aku!!</span>
                </button>
            </div>

            <div className="img-btn">
                <button className="img-button" onClick={() => openPopup("img/3.png")}>
                    <img src="img/6.png" alt="letter" className="img-small"/>
                    <span className="btn-text">maakaasii bgttt</span>
                </button>
                <button className="img-button" onClick={() => openPopup("img/8.png")}>
                    <img src="img/7.png" alt="letter" className="img-small"/>
                    <span className="btn-text">BARCOODEE</span>
                </button>
            </div>

            <button className="btn" onClick={() => navigate("/")}>
                segitu dulu deh!
            </button>

            {popupImage && (
                <div className="popup-overlay" onClick={closePopup}>
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                        <img src={popupImage} alt="Popup" className="popup-image" />
                        <button className="close-btn" onClick={closePopup}>X</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TheBirthdayLetter;
