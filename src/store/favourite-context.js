import {createContext, useState} from 'react';

const FavouriteContext = createContext({
  favourites: [],
  totalFavourites: 0,
  addFavorite: favoriteMeetup => {},
  removeFavorite: meetupId => {},
  itemIsFavorite: meetupId => {},
});

export const FavouriteContextProvider = props => {
  const [userFavourites, setUserFavourites] = useState([]);

  const addFavoriteHandler = favouriteMeetup => {
    setUserFavourites(previousFavorites => {
      return previousFavorites.concat(favouriteMeetup);
    });
  };

  const removeFavoriteHandler = meetupId => {
    setUserFavourites(previousFavorite => {
      return previousFavorite.filter(meetup => meetup.id !== meetupId);
    });
  };

  const itemIsFavoriteHandler = meetupId => {
    return userFavourites.some(meetup => meetup.id === meetupId);
  };

  const context = {
    favourites: userFavourites,
    totalFavourites: userFavourites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,

  };

  return <FavouriteContext.Provider value={context}>
    {props.children}
  </FavouriteContext.Provider>;
};

export default FavouriteContext;