import React from "react";

const Favourites = () => {
    return (
        <div>
            <h1>Favourites</h1>
            <ul>
            {favourites.map((podcast) => ( <li key={podcast.id}>{podcast.title}</li> 
            ))}
            </ul>
        </div>
    );
};

export default Favourites;