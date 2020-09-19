import React from "react";

import AddBtn from "../../Components/AddBtn/AddBtn";
import Header from "../../Components/Header/Header";

import "./Home.scss";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <AddBtn />
    </div>
  );
}
