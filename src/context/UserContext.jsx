import React from "react";

export const UserContext = React.createContext();

export const UserProvider = (props) => {
  // Definindo States
  const [data, setData] = React.useState(null);

  return (
    <UserContext.Provider value={{ data, setData }}>
      {props.children}
    </UserContext.Provider>
  );
};
