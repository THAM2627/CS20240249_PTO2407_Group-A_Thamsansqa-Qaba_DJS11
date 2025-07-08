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

const 
}