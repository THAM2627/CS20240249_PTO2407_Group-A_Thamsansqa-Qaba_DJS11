import React, { createContext, useState, useContext, useRef } from "react";

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
            audioRef.current.play();
        }
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

return (
    <NowPlayingContext.Provider value={{ episode, playEpisode, pause, play, audioRef, isPlaying, setIsPlaying, currentTime, setCurrentTime, duration, setDuration  }}>
        {children}
    </NowPlayingContext.Provider>
);
};

export const useNowPlaying = () => useContext(NowPlayingContext);