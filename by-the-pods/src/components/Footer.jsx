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
        src: {Sho}
            </div>
        </div>
        

        <p>
            By The Pods © 2025
        </p>
        
        <p>
            All rights reserved
        </p>

        <p>
            Designed by: Thamsanqa "THAM!" Qaba
        </p>
        
        </footer>
    )
}

export default Footer