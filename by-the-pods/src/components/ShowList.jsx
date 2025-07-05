import React, { useEffect, useState } from "react";
import "./ShowList.css";

const ShowList = () => {
    const[ shows, setShows ] = useState([]);
    const[ loading, setLoading ] = useState(true);


useEffect(() => {
    const fetchShows = async () => {
        const response = await fetch("https://podcast-api.netlify.app");
        const data = await response.json();
        setShows(data);
        setLoading(false);
    };
    fetchShows();
}, []);

return (
    <div className="show-list">
        {loading ? (
            <p>Loading...</p>
        ):(
            <div className="show-grid">
                {shows.map((show) => (
                    <div key={show.id} className="show-card">
                <h2>{show.title}</h2>
                <img src="show.image" alt={show.title} />
                <p>Genres: {show.genres.join(", ")}</p>
                </div>
                ))}
            </div>
        )}
    </div>
);
};

export default ShowList