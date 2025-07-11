import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const genreMap = {
    1:"Personal Growth", 
    2:"Investigative Journalism", 
    3:"History", 
    4:"Comedy", 
    5:"Entertainment", 
    6:"Business", 
    7:"Fiction", 
    8:"News", 
    9:"Kids and Family"
};

const Trending = () => {
    const [trending, setTrending] = useState([]);
    const [loading, setLoading] = useState(true);


useEffect(() => {
    const fetchTrending = async () => {
        try {
        const resp = await fetch ("https://podcast-api.netlify.app");
        const data = await resp.json();
        const sorted = data.sort((a,b) => new Date(b.updated) - new Date(a.updated))
        .slice(0,5);
        setTrending(sorted);
    } catch (err) {
        console.error("Error fetching trending",err);
    } finally {
        setLoading(false);
    }
    };

    fetchTrending();
}, []);

if (loading) { return (
 <div className="flex justify-center items-center mt-12" >   <p>Loading...</p> 
 <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-white"></div>
 
 </div> 
)

 }

return (
    <div className="mt-12">
        <h2 className="text-3xl font-bold mb-4">Trending Podcasts</h2>
        <div className="flex space-x-4 overflow-x-auto pb-4">
        {trending.map((podcast) => (
            <Link
            key={podcast.id}
            to="/Shows"
            className="min-w-[150px] flex-shrink-0 bg-gray-800 rounded-lg shadow-md hover:scale-105 transition transform} ">
            <img 
            src={podcast.image}
            alt={podcast.title}
            className="w-full h-40 sm:h-32 md:h-36 lg:h-44 object-cover"/>
            <div className="p-4">
            <p className="text-sm md:text-base font-bold truncate">{podcast.title}</p>
            <p className="text-xs text-white">
                {genreMap[podcast.genreIds?.[0]]||"Podcast"}
                </p>
                </div>
            </Link>
        ))}
        </div>
    </div>
)
        }

export default Trending