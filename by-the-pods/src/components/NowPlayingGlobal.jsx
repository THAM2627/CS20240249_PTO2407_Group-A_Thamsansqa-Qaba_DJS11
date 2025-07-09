import React, { createContext, useState, useContext, useRef, useEffect } from "react";

const NowPlayingContext = createContext();

export const NowPlayingProvider = ({ children }) => {
    const [episode, setEpisode] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [ currentTime, setCurrentTime ] = useState(0);
    const [ duration, setDuration ] = useState(0);
    const audioRef = useRef(null);

const playEpisode = (episodeData) => {
    setEpisode(episodeData);
    setIsPlaying(true);
    setTimeout(() => {
        if (audioRef.current) {
            const savedTime = localStorage.getItem(`episode-${episodeData.id}`);
            setCurrentTime(savedTime ? parseFloat(savedTime) : 0);
        } else {
            setCurrentTime(0);
        }
        audioRef.current.play();
    },100);
};

const pause = () => {
    if (audioRef.current) {
        audioRef.current.pause();
    }
    setIsPlaying(false);
};

const play = () => {
    if (audioRef.current) {
        audioRef.current.play();
    }
    setIsPlaying(true);
};

useEffect(() => {
    if (episode) {
        localStorage.setItem(`episode-${episode.id}`, currentTime);
    }
}, [episode, currentTime]);

return (
    <NowPlayingContext.Provider value={{ episode, playEpisode, pause, play, audioRef, isPlaying, setIsPlaying, currentTime, setCurrentTime, duration, setDuration  }}>
        {children}
    </NowPlayingContext.Provider>
);
};

export const useNowPlaying = () => useContext(NowPlayingContext);