import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
    return(
        <div className="text-center mt-20">
        <h1 className="text-3xl font-bold mb-4">Welcome to By The Pods</h1>
        <p className="text-lg text-gray-300  mb-6 max-w-xl mx-auto">
            Discover your favourite podcasts and start listening to them now!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6 text-center">
        <div>
            <span className="text-4xl font-bold text-blue-400">🎙️</span>
            <p className="mt-2 text-sm">Save your favourite podcasts for later</p>
        </div>
        <div>
            <span className="text-4xl font-bold text-blue-400">🎧</span>
            <p className="mt-2 text-sm">Play episodes directly from the app</p>
        </div>
        <div>
            <span className="text-4xl font-bold text-blue-400">🎯</span>
            <p className="mt-2 text-sm">Browse shows</p>
        </div>
        </div>
        <div className="mt-8 flex justify-center gap-4">
        <Link to = "/Shows" className="bg-white text-black font-semibold px-4 py-2 rounded hover:bg-gray-300 transition">
            Browse Shows
        </Link>

        </div>
    )
}