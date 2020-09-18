import React, { useContext } from "react";

import { HomeContext } from "../../ContextAPI/homeContext";

import "./DropDown.scss";

export default function DropDown() {
  const [
    notificationDisplay,
    SetnotificationDisplay,
    dropDownDisplay,
    SetdropDownDisplay,
  ] = useContext(HomeContext);
  const dropDownStyle = dropDownDisplay ? { display: "block" } : null;
  return (
    <div className="drop-down" style={dropDownStyle}>
      <p>Account</p>
      <li className="theme">
        <div>Dark Theme</div>
        <div className="theme-tgl">
          <input class="tgl tgl-ios" id="cb2" type="checkbox" />
          <label class="tgl-btn" for="cb2"></label>
        </div>
      </li>
      <li>Add another account</li>
      <p>More options</p>
      <li>Settings</li>
      <li>Install the Chrome app</li>
      <li>Get help</li>
      <li>See terms and privacy</li>
      <li>Log out</li>
    </div>
  );
}
