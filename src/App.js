import React, { useEffect, useState } from 'react';
import Movieslist from './Movielist';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'; // Add useLocation here
import './App.css';
import Home from './Home';
import Tvlist from './Tvlist';
import Favmovies from './Favmovies';
import Favtv from './Favtv';
import Navbar from './Navbar';

export default function App() {
    const [movies, setMovies] = useState([]);
    const [totalPages, settotalPages] = useState(0)
    const [currentPage, setcurrentPage] = useState(1)
    const fetchmovies = async (currentPage) => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=f531333d637d0c44abc85b3e74db2186&language=en-US&page=${currentPage}`)
            const result = await response.json()
            setMovies(result.results)
            settotalPages(result.total_pages)
        }
        catch (error) {
            console.log('Error in fetching:', error)
        }
    }

    const handleSearch = async (query) => {
        if (query.trim() === '') {
            alert('Search is empty');
        }
        else {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=f531333d637d0c44abc85b3e74db2186&include_adult=false&language=en-US&page=1`)
                const result = await response.json()
                setMovies(result.result);
            } catch (error) {
                alert("error code:", error)
                console.log("Error code:", error)
            }
        }
    }
    useEffect(() => {
        fetchmovies(currentPage)
    }, [currentPage])

    return (
        <div className='main'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/movies/*' element={<div><Navbar /><Movieslist movies={movies} /></div>} />
                    <Route path='/tv/*' element={<div><Navbar /><Tvlist /></div>} />
                    <Route path='/favmovies/*' element={<div><Navbar /><Favmovies /></div>} />
                    <Route path='/favtv/*' element={<div><Navbar /><Favtv /></div>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
