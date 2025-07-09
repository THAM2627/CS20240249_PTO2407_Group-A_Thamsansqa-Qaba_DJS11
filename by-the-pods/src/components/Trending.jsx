import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const genreMap = {
    1:"Personal Growth", 
    2:"Investigative Journalism", 
    3:"History", 
    4:"Comedy", 
    5:"Entertainment", 
    6:"Business", 
    7:"Fiction", 
    8:"News", 
    9:"Kids and Family"
};

const Trending = () => {
    const [trending, setTrending] = useState([]);
}

useEffect(() => {
    (async () => {
        const resp = await fetch ("https://podcast-api.netlify.app");
        const data = await resp.json();
        const sorted = data.sort((a,b) => new Date(b.updated) - new Date(a.updated))
        .slice(0,5);
        setTrending(sorted);
    })();
}, []);

