import React, { useContext } from 'react'

import { HomeContext } from "../../ContextAPI/homeContext"
import "./Notification.scss"


export default function Notification() {
    const [notificationDisplay, SetnotificationDisplay]  = useContext(HomeContext)
    return (
        <div className="notification" style= {
            notificationDisplay && {left : "calc(100vw - 350px)"}
        }>
            <h1>Updates</h1>
        </div>
    )
}
