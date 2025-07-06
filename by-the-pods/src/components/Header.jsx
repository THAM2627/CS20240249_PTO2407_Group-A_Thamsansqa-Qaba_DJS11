import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
        <header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/Shows">Shows</Link>
                <Link to="/Favourites">Favourites</Link>
            </nav>
        </header>
        </div>
    )
}

export default Header