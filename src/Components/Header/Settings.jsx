import React from "react";

import notification from "./Media/notification.svg";
import person from "./Media/person.svg";
import chevron from "./Media/chevron.svg";

import "./Settings.scss";

export default function Settings() {
  return (
    <div className="settings">
      <li>
        <ion-icon name="notifications-sharp"></ion-icon>
      </li>
      <li>
        <ion-icon name="person-circle-sharp"></ion-icon>
      </li>
      <li>
        <ion-icon name="chevron-down-outline"></ion-icon>
      </li>
    </div>
  );
}
