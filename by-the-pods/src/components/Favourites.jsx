import React, { useContext } from "react";
import {FavouritesContext} from "./FavouritesFunction";

const FavouritesList = () => {
    const {favourites } = useContext(FavouritesContext);

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

export default FavouritesList;
