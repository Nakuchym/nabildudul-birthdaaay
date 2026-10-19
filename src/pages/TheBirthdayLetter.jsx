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
                        WOI met ultah gadizazulfiyanassafitrihukumugm26 </p>
                    <p>
                       yang ke 19 tahun ANJIRRR umur ngeri cooo... SINGKAT AJA semoga semua yang 
                       kau doain tuh terkabul dan semogaaa semuaaa yang kau usahakan itu berhasil 
                       baik YA SEMOGA AJA CITA2MU TERCAPAI LAAA nikmati aja prosesnya ❤️ disclaimer 
                       ini websitenya GW BUAT SENDIRI WITH CODINGAN WICIS GW EFFORT LOHYA 👩🏻‍🦯👩🏻‍🦯👩🏻‍🦯👩🏻‍🦯
                    </p>
                   
                    <p style={{ textAlign: "right", marginBottom: "-4px" }}>sincerely,</p>
                    <p style={{ textAlign: "right", marginTop: 0 }}>bileelll terkeren terjago terhebat</p>
                </div>
            </div>

            <div className="title">
                <p>BACAA PESAN SINGKAT GW LAINNYA</p>
            </div>
            <div className="img-btn">
                <button className="img-button" onClick={() => openPopup("img/1.png")}>
                    <img src="img/5.png" alt="letter" className="img-small"/>
                    <span className="btn-text">hmmm</span>
                </button>
                <button className="img-button" onClick={() => openPopup("img/2.png")}>
                    <img src="img/6.png" alt="letter" className="img-small"/>
                    <span className="btn-text">harapan gwe lahyak</span>
                </button>
            </div>

            <div className="img-btn">
                <button className="img-button" onClick={() => openPopup("img/3.png")}>
                    <img src="img/7.png" alt="letter" className="img-small"/>
                    <span className="btn-text">maakaasi kata gwe</span>
                </button>
                <button className="img-button" onClick={() => openPopup("img/4.png")}>
                    <img src="img/8.png" alt="letter" className="img-small"/>
                    <span className="btn-text">GATAU</span>
                </button>
            </div>

            <button className="btn" onClick={() => navigate("/")}>
                    YAUDA SEGITU AJA
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
