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
    setIsPlaying(true);
};

// Function to pause the audio
const pause = () => {
    if (audioRef.current) {
        audioRef.current.pause();
    }
    setIsPlaying(false);
};

// Function to play the audio
const play = () => {
    if (audioRef.current) {
        audioRef.current.play();
    }
    setIsPlaying(true);
};

// Function to handle audio time updates
useEffect(() => {
    if (episode && audioRef.current) {
        audioRef.current.src = episode.audioUrl;
        const savedTime = localStorage.getItem(`episode-${episode.id}`);
        audioRef.current.currentTime= parseFloat(savedTime);
        audioRef.current
        .play()
        .then(()=> setIsPlaying(true))
        .catch((error) => {
            console.error("Error playing audio:", error);
            setIsPlaying(false);
        });
    }
}, [episode]);


return (
    <NowPlayingContext.Provider value={{ 
        episode, 
        playEpisode, 
        pause, 
        play, 
        audioRef, 
        isPlaying, 
        setIsPlaying, 
        currentTime, 
        setCurrentTime, 
        duration, 
        setDuration  }}>
        {children}
    </NowPlayingContext.Provider>
);
};

export const useNowPlaying = () => useContext(NowPlayingContext);