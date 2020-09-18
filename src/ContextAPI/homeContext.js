import React, { useState, createContext } from 'react'

export const HomeContext = createContext();

export const HomeProvider = (props) => {
    const [notificationDisplay, SetnotificationDisplay] = useState(false)
    return (
        <HomeContext.Provider value={notificationDisplay, SetnotificationDisplay}>
            {props.children}
        </HomeContext.Provider>
    )
}
