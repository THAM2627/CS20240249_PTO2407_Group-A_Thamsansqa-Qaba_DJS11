import React, { useEffect, useState } from "react";
import {useFavourites} from "./FavouritesFunction";
import { Link, useSubmit } from "react-router-dom";
import { useSearch } from "./SearchContext";

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
    const [ sortOption, setSortOption ] = useState("title-asc")
    const[ loading, setLoading ] = useState(true);
    const {favourites, addFavourite, removeFavourite} = useFavourites();
    const { searchQuery, setSearchQuery, selectedGenre, setSelectedGenre } = useSearch();

useEffect(() => {
    const fetchShows = async () => {
        try {
        const response = await fetch("https://podcast-api.netlify.app");
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

//Filtering
const filteredShows = shows.filter((show) => {
    const matchesSearch = show.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre = selectedGenre ? show.genreIds.includes(parseInt(selectedGenre)) : true;
    return matchesSearch && matchesGenre;
})
.sort((a, b) => {
    if (sortOption === "title-asc") {
        return a.title.localeCompare(b.title);
    } else if (sortOption === "title-desc") {
        return b.title.localeCompare(a.title);
    } else if (sortOption === "updated-newest") {
        return new Date(b.updated) - new Date(a.updated);
    } else if (sortOption === "updated-oldest") {
        return new Date(a.updated) - new Date(b.updated);
    }
    return 0;
})


return (
    <div className="bg-black text-white min-h-screen px-4 py-8">
    <h1 className="text-3xl font-bold mb-6 text-center">🎧All Shows🎧</h1>

{/*Search & filter Controls*/}

<div className="flex flex-col sm:flex-row gap-4 mb-6 justify-between items-center">
    {/*Search*/}
    <input
    type="text"
    placeholder="Search Shows"
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    className="px-4 py-2 rounded-md text-black w-full sm:w-auto"/>

    {/*Filter by Genre*/}
    <select
    value={selectedGenre}
    onChange={(e) => setSelectedGenre(e.target.value)}
    className="px-4 py-2 rounded-md text-black w-full sm:w-auto">
    <option value="">All Genres</option>
    {Object.entries(genreMap).map(([id, name]) => (
        <option key={id} value={id}>
            {name}
        </option>
    ))}
    </select>

    <select 
    value={sortOption}
    onChange={(e) => setSortOption(e.target.value)}
    className="px-4 py-2 rounded-md text-white w-full sm:w-auto">
<option value="title-asc">Title A → Z</option>
    <option value="title-desc">Title Z → A </option>
    <option value="updated-newest">Updated:Newest</option>
    <option value="updated-oldest">Updated:Oldest</option>
    </select>
</div>

        {loading ? (
            <div className="flex justify-center items-center h-40">
            <p className="text-lg animate-bounce">Loading...</p>
            </div>
        ):(
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">

                {filteredShows.map((show) => (
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