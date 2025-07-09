import React from "react";


const About = () => {
    return (
        <div className="bg-black text-white min-h-screen px-6 py-12 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-4 border-b pb-2 border-gray-700">
            About US</h1>
            
            <h2 className="text-2xl font-semibold mb-2 text-blue-400">🎙️BY THE PODS</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
            Welcome to <span className="font-semibold mb-2 text-blue-400">By The Pods</span> We are a podcast app that allows you to listen to your favorite podcasts.
            Content is king, distraction are gone. Whether you're into deep conversations, comedy, news, insightful stories, mysetries or anything else in between, we have got you covered.
            </p>

            <h2 className="text-2xl font-semibold mb-2 text-blue-400">🎯OUR MISSION</h2>
            <h3 className="text-gray-300 mb-8 leading-relaxed" >To provide a platform for users to listen to their favorite podcasts</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
            Our mission is to provide a platform for users to listen to their favorite podcasts. We believe that listening to podcasts is a great way to learn new things and expand your knowledge.
            </p>
            
        </div>
    );
}

export default About