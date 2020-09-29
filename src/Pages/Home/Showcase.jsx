import React, { useContext } from "react";

import { HomeContext } from "../../ContextAPI/homeContext";

import "./Showcase.scss";

export default function Showcase() {
  const { darkTheme } = useContext(HomeContext);
  // const images = fetch(
  //   "https://jsonplaceholder.typicode.com/photos/?_limit=20"
  // ).then((response) => response.json());
  // let content = false;
  // while (!images) {
  //   setInterval(() => {
  //     content = images.map(({ url }) => <div className="grid-item">{url}</div>);
  //     console.log(content);
  //   }, 1000);
  // }
  // console.log(content);

  return (
    <div className={`showcase ${darkTheme && "dark-showcase"}`}>
      {/* {content} */}
      <div className="grid">
        <div className="grid-item">...</div>
        <div className="grid-item grid-item--width2">...</div>
        <div className="grid-item">...</div>
        ...
      </div>
    </div>
  );
}
