import React, {useEffect, useState} from "react";
import { useParams, Link } from "react-router-dom";
import { useNowPlaying } from "./NowPlayingGlobal";
import { useFavourites } from "./FavouritesFunction";

const ShowDetail = () => {
    const {id} = useParams();
    const { playEpisode } = useNowPlaying();
    const [ show, setShow ] = useState(null);
    const [selectedSeason, setSelectedSeason ] = useState(null);
    const { favourites, addFavourite, removeFavourite } = useFavourites();


useEffect(() => {
    ( async () => {
    try {
        const response = await fetch(`https://podcast-api.netlify.app/id/${id}`);

            const data = await response.json();
            setShow(data);
            setSelectedSeason(data.seasons[0]);
        } catch (error) {
        console.error("Error fetching show:", error);
        };
    })();
    }, [id]);

        
        
    if(!show) return <p>Loading show...</p>;

    const isEpisodeFavourited = (episodeID) =>
    favourites.some((fav) => fav.episodeID === episodeID && fav.showID === show.id);

    return (
        <div className="bg-black text-white min-h-screen px-4 py-8">
            <Link 
            to = "/"
            className="text-blue-400 hover:underline mb-6 inline-block">Back to shows</Link>

        <div className="text-center mb-6">
        <h1 className="text-3xl font-bold mb-2">{show.title}</h1>
        <img src={show.image}
        alt={show.title}
        className="w-60 mx-auto roudned-lg mb-4"/>
        <p className="text-gray-300 max-w-2xl mx-auto">{show.description}</p>
        
        {show.seasons.map((seasons) => (
            <button
            key={seasons.id}
            onClick = {() => setSelectedSeason(seasons)}
            className={seasons.id === selectedSeason?.id ? "font-bold" : "" }
            >
            {seasons.title} ({seasons.episodes.length})
            </button>
        ))}
        </div>
        <ul className="space-y-6 max-w-3xl mx-auto">
  {selectedSeason?.episodes.map((episode) => (
    <li key={episode.id} className="bg-gray-800 p-4 rounded-lg shadow">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <p className="font-semibold">{episode.title}</p>
          <p className="text-sm text-gray-400 truncate">{episode.description}</p>
        </div>

        <div className="flex gap-2 mt-2 sm:mt-0">
          <button
            onClick={() =>
              playEpisode({
                title: episode.title,
                image: episode.image || show.image,
                audioUrl: episode.audio,
                show: show.title,
              })
            }
            className="px-3 py-1 bg-green-600 rounded hover:bg-green-500 text-sm"
          >
            ▶️ Play
          </button>

          <button
            onClick={() =>
              isEpisodeFavourited(episode.id)
                ? removeFavourite(episode.id, show.id)
                : addFavourite({
                    episodeID: episode.id,
                    showID: show.id,
                    title: episode.title,
                    image: episode.image || show.image,
        
                  })
            }
            className={`px-3 py-1 text-sm rounded ${
              isEpisodeFavourited(episode.id)
                ? "bg-red-600 hover:bg-red-700"
                : "bg-gray-600 hover:bg-gray-700"
            }`}
          >
            {isEpisodeFavourited(episode.id) ? "💔 Remove" : "❤️ Favourite"}
          </button>
        </div>
      </div>
    </li>
  ))}
</ul>
        </div>
    );
            };

export default ShowDetail