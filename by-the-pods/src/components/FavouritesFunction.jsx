import { useState } from "react";
import Favourites 

const FavouritesContext = React.createContext();

const FavouritesProvider = ({ children }) => {
    const [favourites, setFavourites] = useState([]);
    return (
        <FavouritesContext.Provider value={{ favourites, setFavourites }}>
            {children}
        </FavouritesContext.Provider>
    );


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
}


export { FavouritesContext, FavouritesProvider };
