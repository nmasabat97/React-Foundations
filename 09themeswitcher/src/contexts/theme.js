import { useContext, createContext } from "react";

export const ThemeContext = createContext({ // passing variable and methods in this scope
    themeMode : "light",
    lightTheme : () => {}, //method. define this in app.jsx 
    darkTheme : () => {}    //method
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme() { // Custom Hook to use across the project.
    return useContext(ThemeContext)
}