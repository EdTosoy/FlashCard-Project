<<<<<<< HEAD
import React, { useContext } from "react";

import { HomeContext } from "../../ContextAPI/homeContext";
import "./Notification.scss";

export default function Notification() {
  const [notificationDisplay, SetnotificationDisplay] = useContext(HomeContext);
  const notificationStyle = notificationDisplay
    ? { left: "calc(100vw - 350px)" }
    : null;
  return <div className="notification" style={notificationStyle}></div>;
=======
import React, { useContext } from 'react'

import { HomeContext } from "../../ContextAPI/homeContext"
import "./Notification.scss"


export default function Notification() {
    const [notificationDisplay, SetnotificationDisplay]  = useContext(HomeContext)
    const notificationStyle = notificationDisplay ?  {left : "calc(100vw - 350px)"} : null; 
    return (
        <div className="notification" style= {notificationStyle}>
            
        </div>
    )
>>>>>>> f28d9a7798f300437f344e40e616e2162f824b5f
}
