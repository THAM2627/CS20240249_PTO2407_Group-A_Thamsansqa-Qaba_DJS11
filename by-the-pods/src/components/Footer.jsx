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
        <footer className="bg-gray-200 text-gray-600">
        

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