import React from "react";

import Logo from "./Logo";
import Tags from "./Tags";
import Search from "./Search";
import Settings from "./Settings";

import "./Header.scss";
import Notification from "./Notification";

export default function Header() {
  return (
    <header>
      <div className="header-content">
        <Logo />
        <Tags />
        <Search />
        <Settings />
        <Notification/>
      </div>
    </header>
  );
}
