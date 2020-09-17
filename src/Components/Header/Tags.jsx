import React from "react";

import "./Tags.scss";

export default function Tags() {
  const tags = [
    {
      id: 1,
      title: "Home",
      isActive: true,
    },
    {
      id: 2,
      title: "Goals",
      isActive: false,
    },
    {
      id: 3,
      title: "Journals",
      isActive: false,
    },
  ];
  return (
    <div className="tags">
      {tags.map(({ id, title, isActive }) => (
        <div className={isActive ? "active tag" : "tag"} key={id}>
          <p>{title}</p>
        </div>
      ))}
    </div>
  );
}
