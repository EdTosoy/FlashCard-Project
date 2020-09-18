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
<<<<<<< HEAD
        <Notification />
        <DropDown />
=======
        <Notification/>
>>>>>>> f28d9a7798f300437f344e40e616e2162f824b5f
      </div>
    </header>
  );
}
