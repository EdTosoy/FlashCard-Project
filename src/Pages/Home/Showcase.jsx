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

  return (
    <div className={`showcase ${darkTheme && "dark-showcase"}`}>
      <div className="grid">
        {imageData.map(({ url }) => (
          <img className="grid-item" src={url} alt="card" />
        ))}
      </div>
    </div>
  );
}
