import React, { useContext } from "react";
import { Favourites } from "./FavouritesFunction";
import FavouritesContext from "./FavouritesFunction";

const FavouritesList = () => {
    const {favourites } = useContext(FavouritesContext);

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

export default FavouritesList;