import React, { useEffect, useState } from "react";
import {useFavourites} from "./FavouritesFunction";
import { Link } from "react-router-dom";

const genreMap = {
    1: "Personal Growth",
    2: "Investigative Journalism",
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
    const {favourites, addFavourite, removeFavourite} = useFavourites();


useEffect(() => {
    const fetchShows = async () => {
        try {
        const response = await fetch(`https://podcast-api.netlify.app`);
        const data = await response.json();
        const sorted = data.sort((a, b) => a.title.localeCompare(b.title));
        setShows(sorted);
        setLoading(false);
    } catch (error) {
        console.error("Failed to fetch shows:", error);
    }
    
    };
    fetchShows();
}, []);

const isFavourite = (show) => favourites.some((fav) => fav.id === show.id);

return (
    <div className="bg-black text-white min-h-screen px-4 py-8">
    <h1 className="text-3xl font-bold mb-6 text-center">🎧All Shows🎧</h1>

        {loading ? (
            <div className="flex justify-center items-center h-40">
            <p className="text-lg animate-bounce">Loading...</p>
            </div>
        ):(
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">

                {shows.map((show) => (
                    <div 
                    key={show.id} className="bg-gray-800 hover:bg-zinc-700 rounded-xl shadow-lg overflow-hidden transition duration-300 transform hover:scale-105
                    cursor-pointer flex flex-col">
            <Link to={`/show/${show.id}`}>
                <img 
                src={show.image} 
                alt={show.title} 
                className="w-full h-32 sm:h-36 md:h-40 lg:h-44 object-cover"/>
                <div className="p-4 flex flex-col gap-2 flex-grow">
                <h4 className="text-sm md:text-base font-semibold truncate">{show.title}</h4>
                <p className ="text-xs text-white">Seasons: {show.seasons}</p>
                <p className = "text-xs text-gray-400"> 
                Genres:{" "}
                {Array.isArray(show.genreIds) ? show.genreIds.map((id)=> genreMap[id]).join(", "): " "}
                </p>
                <p className="text-[10px] text-gray-200 mt-auto">
                Updated: {" "}
                {new Date(show.updated).toLocaleDateString()}
                </p>              
                </div>
                </Link>
                
              
            

                {/*Favourite Button */}
                <button
                onClick = {() => 
                    isFavourite(show)? removeFavourite(show.id): addFavourite(show)
                }
                className = {`mt-2 text-sm px-2 py-1 rounded-md ${
                    isFavourite(show) ? "bg-red-600 hover:bg-red-700" : "bg-gray-600 hover:bg-gray-700" 
                }transition`}>

                {isFavourite(show) ? "💔Remove Favourite" : "❤️Add Favourite"}

                </button>
            
                </div>
                ))}
            </div>
        )}

    </div>
)
}

export default ShowList