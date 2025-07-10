import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        
        <header className="bg-gray-900 text-white px-6 py-4 md:px-12 md:py-6 shadow-md sticky top-0 z-50">
        <h1 className="text-2xl font-extrabold tracking-tight cursor-default select-none">By The Pods</h1>

            <nav className="flex space-x-6 text-sm font-medium">
                <Link to="/"
                className="hover:text-red-500 transition-colors duration-300">Home</Link>
                <Link to="/About"
                className="hover:text-red-500 transition-colors duration-300">About</Link>
                <Link to="/Shows"
                className="hover:text-red-500 transition-colors duration-300">Shows</Link>
                <Link to="/Favourites"
                className="hover:text-red-500 transition-colors duration-300">Favourites</Link>
            </nav>
            <input
            type="text"
            placeholder="Search shows..."
            className="text-black px-4 py-1 rounded w-full sm:w-64"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}/>
        </header>

    )
}

export default Header