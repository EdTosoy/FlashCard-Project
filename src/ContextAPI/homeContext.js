<<<<<<< HEAD
import React, { useState, createContext } from "react";
=======
import React, { useState, createContext } from 'react'
>>>>>>> f28d9a7798f300437f344e40e616e2162f824b5f

export const HomeContext = createContext();

export const HomeProvider = (props) => {
<<<<<<< HEAD
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
=======
    const [notificationDisplay, SetnotificationDisplay] = useState(false)
    const [dropDownDisplay, SetdropDownDisplay] = useState(true)


    return (
        <HomeContext.Provider value={[notificationDisplay, SetnotificationDisplay, dropDownDisplay, SetdropDownDisplay]}>
            {props.children}
        </HomeContext.Provider>
    )
}
>>>>>>> f28d9a7798f300437f344e40e616e2162f824b5f
