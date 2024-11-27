import { useState } from "react"

export const useDarkMode = () => {
    const [isDarkMode, setIsDarkMode]= useState(localStorage.getItem("isDarkMode")===true);

    const toggleDarkMode = () =>{
        setIsDarkMode((prevMode)=>{
            localStorage.setItem("isDarkMode",!prevMode)
            return !prevMode;
        })
    }
    return {isDarkMode,toggleDarkMode};
}