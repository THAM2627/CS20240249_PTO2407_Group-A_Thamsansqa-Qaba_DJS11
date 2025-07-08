import { useState, createContext, useContext } from "react";


const FavouritesContext = createContext();

const FavouritesProvider = ({ children }) => {
    const [favourites, setFavourites] = useState([]);

const addFavourite = (podcast) => {
    setFavourites([...favourites, podcast]);
};

const removeFavourite = (podcast) => {
    setFavourites(favourites.filter((f) => f.id !== podcast.id));
};

return (
    <FavouritesContext.Provider value={{ favourites, addFavourite, removeFavourite }}>
        {children}
    </FavouritesContext.Provider>
)
};


export { FavouritesContext, FavouritesProvider };
