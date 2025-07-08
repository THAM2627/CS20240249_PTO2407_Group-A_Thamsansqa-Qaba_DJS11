import { useState, createContext, useContext, useEffect } from "react";


const FavouritesContext = createContext();

const FavouritesProvider = ({ children }) => {
    const [favourites, setFavourites] = useState(() => {
        const stored = localStorage.getItem("favourites");
        return stored ? JSON.parse(stored) : [];
    });

const addFavourite = (podcast) => {
    setFavourites((prev) => [...prev, podcast]);
};

const removeFavourite = (podcast) => {
    setFavourites((prev) => prev.filter((f) => f.id !== podcast.id));
};

return (
    <FavouritesContext.Provider value={{ favourites, addFavourite, removeFavourite }}>
        {children}
    </FavouritesContext.Provider>
);
};


export { FavouritesContext, FavouritesProvider };
