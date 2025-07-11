import React, { createContext, useState, useContext, useRef, useEffect } from "react";

const NowPlayingContext = createContext();

export const NowPlayingProvider = ({ children }) => {
    const [episode, setEpisode] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [ currentTime, setCurrentTime ] = useState(0);
    const [ duration, setDuration ] = useState(0);
    const audioRef = useRef(null);

// Function to play an episode
const playEpisode = (episodeData) => {
    setEpisode(episodeData);
};

// Function to pause the audio
const pause = () => {
    audioRef.current.pause();
};

// Function to play the audio
const play = () => {
    audioRef.current.play();
};

// Function to handle audio time updates
useEffect(() => {
    if (episode && audioRef.current) {
        audioRef.current.src = episode.audioUrl;
        const savedTime = localStorage.getItem(`episode-${episode.episodeID}`);
        if (savedTime) {
        audioRef.current.currentTime = parseFloat(savedTime);
        } else {
        audioRef.current.currentTime = 0;
        }
        audioRef.current.play().catch((error) => {
            console.error("Error playing audio:", error);
            setIsPlaying(false);
        });
    }
}, [episode]);

//Adding Event Listeners to the audio

useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlay = () => {
        setIsPlaying(true);
    };
    const handlePause = () => {
        setIsPlaying(false);
    }
    const handleTimeUpdate = () => {
        setCurrentTime(audio.currentTime);
        if(episode) {
            localStorage.setItem(`episode-${episode.episodeID}`, audio.currentTime);
        }
    };
    const handleLoadedMetadata = () => {
        if (!isNaN(audio.duration)) {
            setDuration(audio.duration);
        }
    };

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("ended", handlePause); // Also treat end of track as paused
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);

    // Cleanup listeners on component unmount
    return () => {
        audio.removeEventListener("play", handlePlay);
        audio.removeEventListener("pause", handlePause);
        audio.removeEventListener("ended", handlePause);
        audio.removeEventListener("timeupdate", handleTimeUpdate);
        audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
}, [episode]); // Rerun if episode changes to handle localStorage key

const value = { episode, isPlaying, currentTime, duration, playEpisode, play, pause, seek };



return (
    <NowPlayingContext.Provider value={{ value }}>
        {children}
        <audio ref = {audioRef} className="hidden"/>
    </NowPlayingContext.Provider>
);
};

export const useNowPlaying = () => useContext(NowPlayingContext);