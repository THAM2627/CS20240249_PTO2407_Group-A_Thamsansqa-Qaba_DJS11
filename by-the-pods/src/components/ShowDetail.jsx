import React, {useEffect, useState} from "react";
import { useParams, Link } from "react-router-dom";
import { useNowPlaying } from "./NowPlayingGlobal";

const ShowDetail = () => {
    const {id} = useParams();
    const { playEpisode } = useNowPlaying();
    const [ show, setShow ] = useState(null);
    const [selectedSeason, setSelectedSeason ] = useState(null);


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
        <li key={episode.id}>
            {episode.title}
            <button onClick={() => playEpisode ({
            title: episode.title,
            image: episode.image,
            audioUrl: episode.audio,
            show: show.title,})}>
            Play
            </button>
            </li>
        ))}
    </ul>
        </div>
    );
            };

export default ShowDetail