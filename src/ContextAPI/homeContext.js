import React, { useState, createContext } from "react";

export const HomeContext = createContext();


export const HomeProvider = ({children}) => {
  const [notificationDisplay, SetnotificationDisplay] = useState(false);
  const [dropDownDisplay, SetdropDownDisplay] = useState(false);
  const [addModalDisplay, setAddModalDisplay] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false)

  return (
    <HomeContext.Provider
      value={
        {
          notificationDisplay,
          SetnotificationDisplay,
          dropDownDisplay,
          SetdropDownDisplay,
          addModalDisplay,
          setAddModalDisplay,
          darkTheme,
          setDarkTheme
        }
      }
    >


      {children}
    </HomeContext.Provider>
  );
};
