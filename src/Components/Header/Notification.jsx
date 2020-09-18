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
}
