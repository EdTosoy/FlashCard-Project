import React, { useContext } from "react";

import { HomeContext } from "../../ContextAPI/homeContext";

import "./AddBtn.scss";
import AddModalWrapper from "./AddModalWrapper";

export default function AddBtn() {
  const [
    notificationDisplay,
    SetnotificationDisplay,
    dropDownDisplay,
    SetdropDownDisplay,
    addModalDisplay,
    setAddModalDisplay,
  ] = useContext(HomeContext);
  const handleClick = () => {
    setAddModalDisplay((preValue) => !preValue);
  };
  return (
    <div onClick={handleClick}>
      <div className="add-btn">
        <ion-icon name="add-outline"></ion-icon>
      </div>
      <AddModalWrapper />
    </div>
  );
}
