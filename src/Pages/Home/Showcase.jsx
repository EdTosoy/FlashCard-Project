import React,  { useContext } from "react";

import { HomeContext } from "../../ContextAPI/homeContext"

import "./Showcase.scss";

export default function Showcase() {
  const darkTheme = useContext(HomeContext)
  return (
    <div className={darkTheme ? "showcase-dark-theme" : "showcase"}>
      <div className="card">card</div>
    </div>
  );
}
