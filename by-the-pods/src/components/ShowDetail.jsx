import React, {useEffect, useState} from "react";
import { useParams, Link } from "react-router-dom";
import { useNowPlaying } from "./NowPlayingGlobal";

const ShowDetail = () => {
    const {id} = useParams();
    const { playEpisode } = useNowPlaying();
    const [ show, setShow ] = useState(null);
    const [selectedSeason, setSelectedSeason ] = useState(null);
}

useEffect(() => {
    try {
        ( async () => {
            const response = await fetch(`https://podcast-api.netlify.app/${id}`);
            const data = await response.json();
            setShow(data);
            setSelectedSeason(data.seasons[0]);
        })();
    }, [id]);

    if(!show) return <p>Loading show...</p>;

    return (
        <div>
            <Link to = "/Shows">Back to shows</Link>
            <h1>{show.title}</h1>
        <div>
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
    