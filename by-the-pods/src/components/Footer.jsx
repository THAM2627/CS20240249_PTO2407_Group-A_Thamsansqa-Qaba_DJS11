import React from "react";
import { useNowPlaying } from "./NowPlayingGlobal";


const Footer = () => {
    const 
    {episode, 
    isPlaying, 
    audioRef, 
    play, 
    pause, 
    currentTime, 
    duration,
    seek, 
} = useNowPlaying();

    if (!episode) return null;

    const togglePlay = () => {
        isPlaying ? pause() : play();
    };

    const handleSeek = (e)  => {
        const progressBar = e.currentTarget;
        const rect = progressBar.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const newTime = (clickX / rect.width) * duration;
        seek(newTime);
    };

    const formatTime = (time) => {
        if (isNaN(time)) return "00:00";
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60)
        .toString()
        .padStart(2, "0");
        
        return `${minutes}:${seconds}`;
    };

    const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

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

        <div className="w-full sm:w-1/2">
            <div className="h-2 bg-gray-600 rounded cursor-pointer"
            onClick={handleSeek}>
            <div className="h-2 bg-blue-500 rounded"
            style= {{width: `${progressPercent}%`}}/>
            </div>
            <div className="flex justify-between text-xs mt-1 text-gray-300">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
            </div>
        </div>
        </div>
            </div>
        
        
        </footer>
    )
}

export default Footer