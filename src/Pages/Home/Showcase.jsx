import React, { useState, useContext, useEffect } from "react";

import { HomeContext } from "../../ContextAPI/homeContext";

import "./Showcase.scss";

export default function Showcase() {
  const { darkTheme } = useContext(HomeContext);

  const [imageData, setimageData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos/?_limit=20")
      .then((response) => response.json())
      .then((data) => setimageData(data));
  }, []);

  // console.log(test);

  return (
    <div className={`showcase ${darkTheme && "dark-showcase"}`}>
      {imageData.map(({ url }) => (
        <div className="grid-item">
          <img src={url} alt="card" />
        </div>
      ))}
      <div className="grid">
        <div className="grid-item">...</div>
        <div className="grid-item grid-item--width2">...</div>
        <div className="grid-item">...</div>
        ...
      </div>
    </div>
  );
}
