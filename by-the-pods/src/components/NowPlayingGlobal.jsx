import React, { createContext, useState, useContext, useRef } from "react";

const NowPlayingContext = createContext();

export const NowPlayingProvider = ({ children }) => {
    const [episode, setEpisode] = useState(null);
    const audioRef = useRef(null);

const playEpisode = (episodeData) => {
    setEpisode(episodeData);
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
};

const play = () => {
    if (audioRef.current) {
        audioRef.current.play();
    }
};

return (
    <NowPlayingContext.Provider value={{ episode, playEpisode, pause, play, audioRef }}>
        {children}
    </NowPlayingContext.Provider>
);
};

export const useNowPlaying = () => useContext(NowPlayingContext);