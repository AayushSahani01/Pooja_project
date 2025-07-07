import { Moon, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    
    useEffect(() => {
        if( localStorage.getItem('theme') === 'dark'){
            document.documentElement.classList.add('dark');
            setIsDarkMode(true);
        }
        
    },[])
    const toggleTheme = () => {
        if(isDarkMode){
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setIsDarkMode(false);
        }else{
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsDarkMode(true);
        }
    }
    return (
         <button onClick={toggleTheme} className="p-2 border-2 border-gray-500 rounded-full hover:border-orange-600 hover:animate-pulse cursor-pointer">
            
            {!isDarkMode ?  (<Sun className="h-6 w-8 text-yellow-300"/>) : (<Moon className="h-6 w-8 text-blue-800"/>)
            }
         </button>
    )
};

export default ThemeToggle;