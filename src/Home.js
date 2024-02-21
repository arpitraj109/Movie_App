import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function Home() {
    const navigate = useNavigate()
    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    useEffect(() => {
        alert('Try new dark theme!')
    }, [])

    return (
        <>
        <div>

      
            <h1 className='home-h1'>What would you like to watch?</h1>
            
            <div className='home'>
                <button onClick={() => navigate("/movies")}>Movies</button>
                <button onClick={() => navigate("/tv")}>TV Shows</button>
            </div>
            
            </div>
        </>
    )
}
