import React, { useRef, useState } from "react";


const Footer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
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

    return (
        <footer className="fixed bottom-0 w-full bg-gray-900 text-white px-4 py-3 shadow-lg z-50">
        <div  className="flex flex-col sm:flex-row items-center justify-between">
            {/* Audio Player - Now Playing */}
        <div className="flex items-center gap-4 mb-2 sm:mb:0">
        <img 
        src = {show.image}
        alt = {show.title}
        classname = "w-10 h-10 rounded-lg"/>

            </div>
        </div>
        
        
        </footer>
    )
}

export default Footer