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
         <button onClick={toggleTheme} className="p-2 rounded-full transition-all duration-200 ease-in-out
                     hover:bg-gray-200 dark:hover:bg-gray-800"
            aria-label="Toggle theme">
            
            {!isDarkMode ?  (<Sun className="h-6 w-7 text-yellow-300"/>) : (<Moon className="h-6 w-7 text-blue-800"/>)
            }
         </button>
    )
};

export default ThemeToggle;