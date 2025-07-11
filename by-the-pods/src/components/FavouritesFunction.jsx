import { useState, createContext, useContext, useEffect } from "react";


const FavouritesContext = createContext();

const FavouritesProvider = ({ children }) => {
    const [favourites, setFavourites] = useState(() => {
        const stored = localStorage.getItem("favourites");
        return stored ? JSON.parse(stored) : [];
    });

useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
}, [favourites]);

const addFavourite = (episode) => {
    setFavourites((prev) => {
      const exists = prev.find(
        (item) =>
          item.episodeID === episode.episodeID && item.showID === episode.showID
      );
      if (exists) return prev;
      return [...prev, { ...episode, dateAdded: Date.now() }];
    });
  };

const removeFavourite = (episodeID, showID) => {
    setFavourites((prev) => prev.filter((f) => !(f.episodeid === episodeID && f.showID === showID)));
};

const isEpisodeFavourited = (episodeID, showID) =>
favourites.some((fav) => fav.episodeID === episodeID && fav.showID === showID);

return (
    <FavouritesContext.Provider value={{ favourites, addFavourite, removeFavourite }}>
        {children}
    </FavouritesContext.Provider>
);
};

const useFavourites = () => useContext(FavouritesContext);

export { FavouritesContext, FavouritesProvider, useFavourites };
