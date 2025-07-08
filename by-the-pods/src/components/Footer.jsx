import React, { useRef, useState } from "react";
import { useNowPlaying } from "./NowPlayingGlobal";


const Footer = () => {
    const {episode, isPlaying, setIsPlaying} = useNowPlaying();
    const audioRef = useRef(null);

    const togglePlay = () => {
        const audio = audioRef.current;
        if (!audio) return;

        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    if(!episode) return null;

    return (
        <footer className="fixed bottom-0 w-full bg-gray-900 text-white px-4 py-3 shadow-lg z-50">
        <div  className="flex flex-col sm:flex-row items-center justify-between">
            {/* Audio Player - Now Playing */}
        <div className="flex items-center gap-4 mb-2 sm:mb:0">
        <img 
        src = {episode.image}
        alt = "cover"
        className = "w-10 h-10 rounded-lg"/>

        <div> 
        <p className="text-sm font-semibold truncate max-w-[150px]">{episode.title}</p>
        <p className="text-xs text-gray-400 truncate max-w-[150px]">{episode.show || "Unknown Show"}</p> 
        </div>
        <div className="flex items-center gap-4">
            <button
            onClick={togglePlay}
            className="bg-white text-black px-3 py-1 rounded hover:bg-gray-300 transition">
            {isPlaying ? "Pause" : "Play"}
            </button>
        </div>
        <audio ref ={audioRef}
        src={episode.audioUrl}/>

        </div>
            </div>
        
        
        </footer>
    )
}

export default Footer