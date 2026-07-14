import React, { useState, useRef } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import Letter from "./pages/Letter";
import TheBirthdayLetter from "./pages/TheBirthdayLetter";

import "./App.css";

const birthdayMusic = "https://files.catbox.moe/b1yhlv.mp3";


function Background() {
  const items = [];

  const rows = 8;
  const cols = 6;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const image = (row + col) % 2 === 0
        ? "capybara.png"
        : "kucing.png";

      items.push(
        <img
          key={row + "-" + col}
          src={"/img/" + image}
          className="bg-item"
          style={{
            left: (col * 18 + 5) + "%",
            top: (row * 15) + "%",
            animationDelay: ((row + col) * 0.15) + "s",
          }}
        />
      );
    }
  }

  return (
    <div className="background">
      {items}
    </div>
  );
}


function AppContent() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  function toggleMusic() {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  }


  return (
    <div className="app-container">

      <Background />

      {isHomePage && (
        <div className="music-btn-container">
          <button className="btn" onClick={toggleMusic}>
            {isPlaying ? "matiin lagunya" : "nyalain lagunya"}
          </button>
        </div>
      )}

      <audio
        ref={audioRef}
        src={birthdayMusic}
        loop
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/letter" element={<Letter />} />
        <Route path="/the-birthday-letter" element={<TheBirthdayLetter />} />
      </Routes>

    </div>
  );
}


function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);