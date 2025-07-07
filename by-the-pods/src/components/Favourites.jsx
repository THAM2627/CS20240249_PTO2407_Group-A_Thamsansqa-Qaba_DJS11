import React from "react";
import { Favourites } from "./FavouritesFunction";

const FavouritesList = () => {
    return (
        <div>
            <h1>Favourites</h1>
            <ul>
            {Favourites.map((podcast) => ( <li key={podcast.id}>{podcast.title}</li> 
            ))}
            </ul>
        </div>
    );
};

export default Favourites;