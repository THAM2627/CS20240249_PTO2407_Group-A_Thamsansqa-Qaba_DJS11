import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        
        <header className="bg-blue-500 text-black p-4 md:p-6 lg:p-8">
        <h1 className="text-2xl font-bold">By The Pods</h1>"
            <nav>
                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/Shows">Shows</Link>
                <Link to="/Favourites">Favourites</Link>
            </nav>
        </header>

    )
}

export default Header