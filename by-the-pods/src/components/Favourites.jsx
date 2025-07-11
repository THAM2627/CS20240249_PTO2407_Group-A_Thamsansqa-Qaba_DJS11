import React from "react";
import {useFavourites} from "./FavouritesFunction";

const FavouritesList = () => {
    const {favourites, removeFavourite} = useFavourites();
    const [ sortOrder, setSortOrder ] = React.useState("asc");
    const sortedFavourites = [...favourites].sort((a, b) => {
        if(sortOrder === "asc") {
            return a.title.localeCompare(b.title);
        } else {
            return b.title.localeCompare(a.title);
        }
        return 0;
    })

    return (
        <div className="bg-black text-white min-h-screen px-4 py-8">
            <h1 className="text-3xl font-bold mb-6 text-center">❤️Your Favourites❤️</h1>

        {/*Sort Button */}
        <div className="mb-4 flex justify-center gap-4">
            <label className="flex items-center"> Sort by Title: </label> 
            <select
            id="SortOrder"
                
        </div>

            {favourites.map((podcast) => (
               <div 
               key={podcast.id}
               className="bg-gray-800 hover:bg-zinc-700 rounded-xl shadow-md overflow-hidden transition duration-300 transform hover:scale-105 cursor-pointer flex flex-col">
                <img 
                src={podcast.image}
                alt={podcast.title}
                className="w-full h-40 sm:h-32 md:h-36 lg:h-44 object-cover"/>
                <div className="p-4 flex flex-col gap-2 flex-grow"> 
                <h4 className="text-sm md:text-base font-bold truncate">{podcast.title}</h4>
                <p className="text-xs text-white">
                    Seasons: {podcast.seasons}
                </p>
                <button 
                onClick={() => removeFavourite(podcast.id)}
                className="mt-auto bg-red-600 text-white text-xs px-2 py-1 rounded hover:bg-red-400 transition">
                    Remove
                </button>
                </div>
                </div>
            ))}
           
        </div>
    );
};

export default FavouritesList;
