import { createContext, useState } from "react"

export const ThemeContext = createContext()

function ThemeProvider({ children }) {

    const [theme, setTheme] = useState("light")

    const changeTheme = () => {
        if ( theme === "light"){
            setTheme("dark")
        }if ( theme === "dark"){
            setTheme("light")
        }
    }


    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;