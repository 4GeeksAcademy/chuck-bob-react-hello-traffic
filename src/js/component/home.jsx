import React, { useState } from "react";
import "./styles.css";

const Home = () => {

  const [activeLight, setActiveLight] = useState(null);

  const handleLightClick = (light) => {
    setActiveLight(light);
  };

  return (
    <div>
      <div className="left-buffer"></div>
      <div className="top-center"></div>
      <div className="right-buffer"></div>
      <div>
        <div className="text-center">
          <div
            className={`red-light ${activeLight === "red" ? "red-light-bright" : ""}`}
            onClick={() => handleLightClick("red")}
          ></div>
          <div
            className={`yellow-light ${activeLight === "yellow" ? "yellow-light-bright" : ""}`}
            onClick={() => handleLightClick("yellow")}
          ></div>
          <div
            className={`green-light ${activeLight === "green" ? "green-light-bright" : ""}`}
            onClick={() => handleLightClick("green")}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
