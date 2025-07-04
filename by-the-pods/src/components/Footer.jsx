import React from "react";
import {Link} from "react-router-dom";

const Footer = () => {
    return (

        <footer>
             <p>
            Hello Some text from the footer to check the components.
        </p>
        
            <Link to = "about">About</Link>
        </footer>
    )
}

export default Footer