import {useContext} from 'react';
import FavouriteContext from '../store/favourite-context';
import MeetupList from '../components/meetups/MeetupList';

const Favourites = () => {
  const favoriteCtx = useContext(FavouriteContext);

  let content;

  if (favoriteCtx.totalFavourites === 0)
    content = <p>You have no favourite yet! Add some?</p>;
  else
    content =
        <MeetupList meetups={favoriteCtx.favourites}/>;
  return <div>
    <h1>My Favourite Meetups</h1>
    {content}
  </div>;
};

export default Favourites;