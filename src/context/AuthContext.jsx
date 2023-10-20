import { createContext, useState, useContext } from "react";

//? 1- Defining
const ThemeContext = createContext();

//? 2- Provider Component
const ThemeContextProvider = ({ children }) => {
  
    const [myTheme, setMyTheme] = useState("light");

  const values = { myTheme, setMyTheme };

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

//? 3-Consume function (Custom Hook)
export const useThemeContext = () => {
  return useContext(ThemeContext);
};

export default ThemeContextProvider;
