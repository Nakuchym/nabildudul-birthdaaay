import React from "react";
import Typewriter from "typewriter-effect";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="app">
      <div className="text-container">
        <div className="text">
          <Typewriter
            options={{
              strings: ["WOII MET HBD GADIZA ZULFIYANA SAFITRI, S.H."],
              autoStart: true,
              loop: true,
              delay: 100,
              deleteSpeed: 50,
            }}
          />
        </div>
      </div>
      
      <button className="btn" onClick={() => navigate("/letter")}>
        oke makasih orang baik orang hebat
      </button>
    </div>
  );
}

export default Home;
