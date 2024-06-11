import React, { createContext, useState } from "react";
import Layout from "./layout/Layout";
export const MyContext = createContext();
const App = () => {
  const [popUpShow, setPopUpShow] = useState(false);
  return (
    <MyContext.Provider value={{ popUpShow, setPopUpShow }}>
      <Layout  />
    </MyContext.Provider>
  );
};

export default App;
