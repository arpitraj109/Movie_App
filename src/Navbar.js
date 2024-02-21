import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile, faSearch, faSmile, fsmileo } from '@fortawesome/free-solid-svg-icons';

export default function Navbar({ onSearch }) {
    const [search, setSearch] = useState('');

    return (
        <>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Barrio&display=swap')
            </style>
            <div className='navbar'>
                <h2> Movie <FontAwesomeIcon icon={faFaceSmile}/></h2>
                <ul className='navbar-links'>
                    <li>
                        <NavLink to='/' activeClassName='active'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/movies' activeClassName='active'>Movies</NavLink>
                    </li>
                    <li>
                        <NavLink to='/tv' activeClassName='active'>TV Shows</NavLink>
                    </li>
                    <li>
                        <NavLink to='/favmovies' activeClassName='active'>My movies</NavLink>
                    </li>
                    <li>
                        <NavLink to='/favtv' activeClassName='active'>My TV Shows</NavLink>
                    </li>
                </ul>
            </div>
            <div className='search-btn'>
                <input type='text' placeholder='Search for movie' onChange={(e) => setSearch(e.target.value)}></input>
                <button onClick={() => onSearch(search)}><FontAwesomeIcon icon={faSearch} /></button>
            </div>
        </>
    )
}
