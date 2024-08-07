import  React, {useState, createContext, useEffect} from 'react'

export const ThemeContext = React.createContext()

export default function ThemeProvider(props) {
    const [color, setColor] = useState('dark')

    const [background, setBackground] = useState("#242424")

    const toggleTheme = () => {
        setColor(prevColor => prevColor === "dark" ? "light" : "dark")
    }

    const toggleBackground = () => {
        setBackground(prevColor => prevColor === "#242424" ? "white" : "#242424")
    }

    useEffect(() =>{
        document.body.style.backgroundColor = background
    }, [background])

    return(
        <ThemeContext.Provider value={{
            color: color, 
            toggleTheme: toggleTheme,
            toggleBackground: toggleBackground,
        }}>
           {props.children}
        </ThemeContext.Provider>
    )
}