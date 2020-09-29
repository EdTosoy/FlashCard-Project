import React, { useContext } from "react";

import Masonry from "react-masonry-css";

import { HomeContext } from "../../ContextAPI/homeContext";

import "./Showcase.scss";

export default function Showcase() {
  const { darkTheme } = useContext(HomeContext);
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };
  return (
    <div className={`showcase ${darkTheme && "dark-showcase"}`}>
      {/* <div className="card">card</div> */}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        <div>My Element</div>
        <div>My Element</div>
        <div>My Element</div>
        <div>My Element</div>
      </Masonry>
    </div>
  );
}
