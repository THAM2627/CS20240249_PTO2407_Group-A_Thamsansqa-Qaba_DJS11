import { useState } from "react";

const FavouritesContext = React.createContext();

const FavouritesProvider = ({ children }) => {
    const [favourites, setFavourites] = useState([]);
    return (
        <FavouritesContext.Provider value={{ favourites, setFavourites }}>
            {children}
        </FavouritesContext.Provider>
    );
};