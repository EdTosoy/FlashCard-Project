import React, { useState, createContext } from "react";

export const HomeContext = createContext();

export const HomeProvider = (props) => {
  const [notificationDisplay, SetnotificationDisplay] = useState(false);
  const [dropDownDisplay, SetdropDownDisplay] = useState(false);
  const [addModalDisplay, setAddModalDisplay] = useState(false);

  return (
    <HomeContext.Provider
      value={[
        notificationDisplay,
        SetnotificationDisplay,
        dropDownDisplay,
        SetdropDownDisplay,
        addModalDisplay,
        setAddModalDisplay,
      ]}
    >
      {props.children}
    </HomeContext.Provider>
  );
};
