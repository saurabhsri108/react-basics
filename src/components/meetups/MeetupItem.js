import classes from './MeetupItem.module.css';
import Card from '../ui/Card';
import {useContext} from 'react';
import FavouriteContext from '../../store/favourite-context';

const MeetupItem = props => {

  const favoriteCtx = useContext(FavouriteContext);

  const itemIsFavorite = favoriteCtx.itemIsFavorite(props.id);

  const toggleFavouriteMeetupHandler = () => {
    if (itemIsFavorite) {
      favoriteCtx.removeFavorite(props.id);
    } else {
      favoriteCtx.addFavorite({
        id: props.id,
        title: props.title,
        address: props.address,
        image: props.image,
        description: props.description,
      });
    }
  };

  return <li className={classes.item}>
    <Card>
      <div className={classes.image}>
        <img src={props.image} alt={props.title}/>
      </div>
      <div className={classes.content}>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </div>
      <div className={classes.actions}>
        <button onClick={toggleFavouriteMeetupHandler}>
          {itemIsFavorite ? 'Remove From Favourite' : 'To Favourite'}
        </button>
      </div>
    </Card>
  </li>;
};

export default MeetupItem;