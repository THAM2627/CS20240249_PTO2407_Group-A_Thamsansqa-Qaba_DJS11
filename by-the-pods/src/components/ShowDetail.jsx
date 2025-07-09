import React, {useEffect, useState} from "react";
import { useParams, Link } from "react-router-dom";
import { useNowPlaying } from "./NowPlayingGlobal";

const ShowDetail = () => {
    const {id} = useParams();
    const { playEpisode } = useNowPlaying();
    const [ show, setShow ] = useState(null);
    const [selectedSeason, setSelectedSeason ] = useState(null);
}

