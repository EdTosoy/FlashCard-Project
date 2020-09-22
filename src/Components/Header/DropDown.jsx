import React, { useContext } from "react";

import { HomeContext } from "../../ContextAPI/homeContext";

import "./DropDown.scss";

export default function DropDown() {
  const { dropDownDisplay } = useContext(HomeContext);
  const dropDownStyle = dropDownDisplay ? { display: "block" } : null;
  return (
    <div className="drop-down" style={dropDownStyle}>
      <p>Account</p>
      <li className="theme">
        <div>Dark Theme</div>
        <div className="theme-tgl">
          <input className="tgl tgl-ios" id="cb2" type="checkbox" />
          <label className="tgl-btn" htmlFor="cb2"></label>
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