import React, { useState, createContext } from "react";

export const HomeContext = createContext();

export const HomeProvider = (props) => {
  const [notificationDisplay, SetnotificationDisplay] = useState(false);
  const [dropDownDisplay, SetdropDownDisplay] = useState(true);

  return (
    <HomeContext.Provider
      value={[
        notificationDisplay,
        SetnotificationDisplay,
        dropDownDisplay,
        SetdropDownDisplay,
      ]}
    >
      {props.children}
    </HomeContext.Provider>
  );
};
