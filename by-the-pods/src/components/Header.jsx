import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav>
                <p>
                    Hello Some text from the header to check the components.
                </p>
                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
            </nav>
        </header>
    )
}

export default Header