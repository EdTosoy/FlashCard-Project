import React, { useContext } from "react";

import { HomeContext } from "../../ContextAPI/homeContext";
import "./AddModal.scss";

export default function AddModal() {
  const handleClick = (e) => {
    e.stopPropagation();
  };
  const { darkTheme } = useContext(HomeContext);
  return (
    <div
      className={`add-modal ${darkTheme && "dark-add-modal"}`}
      onClick={handleClick}
    ></div>
  );
}
