import React from "react";

import "./AddModal.scss";

export default function AddModal() {
  const handleClick = (e) => {
    e.stopPropagation();
  };
  return <div className="add-modal" onClick={handleClick}></div>;
}
