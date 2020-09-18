import React from "react";

import Logo from "./Logo";
import Tags from "./Tags";
import Search from "./Search";
import Settings from "./Settings";
import Notification from "./Notification";

import "./Header.scss";
import DropDown from "./DropDown";

export default function Header() {
  return (
    <header>
      <div className="header-content">
        <Logo />
        <Tags />
        <Search />
        <Settings />
        <Notification />
        <DropDown />
      </div>
    </header>
  );
}
