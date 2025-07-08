import React, { useContext } from "react";
import {FavouritesContext} from "./FavouritesFunction";

const FavouritesList = () => {
    const {favourites } = useContext(FavouritesContext);

    return (
        <div className="bg-black text-white min-h-screen px-4 py-8">
            <h1 className="text-3xl font-bold mb-6 text-center">❤️Your Favourites❤️</h1>
            {favourites}
            <ul>
            {favourites.map((podcast) => ( <li key={podcast.id}>{podcast.title}</li> 
            ))}
            </ul>
        </div>
    );
};

export default FavouritesList;
