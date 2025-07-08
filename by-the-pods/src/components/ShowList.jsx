import React, { useEffect, useState } from "react";

const genreMap = {
    1: "Personal Growth",
    2: "Investgative Journalism",
    3: "History",
    4: "Comedy",
    5: "Entertainment",
    6: "Business",
    7: "Fiction",
    8: "News",
    9: "Kids and Family"
}

const ShowList = () => {
    const[ shows, setShows ] = useState([]);
    const[ loading, setLoading ] = useState(true);


useEffect(() => {
    const fetchShows = async () => {
        const response = await fetch("https://podcast-api.netlify.app");
        const data = await response.json();
        const sorted = data.sort((a, b) => a.title.localeCompare(b.title));
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
                <h4>{show.title}</h4>
                <img src={show.image} alt={show.title} />
                <p>Genres: {show.genres.join(", ")}</p>
                </div>
                ))}
            </div>
        )}
    </div>
);
};

export default ShowList