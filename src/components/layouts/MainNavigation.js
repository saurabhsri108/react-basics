import {Link} from 'react-router-dom';
import classes from './MainNavigation.module.css';
import {useContext} from 'react';
import FavouriteContext from '../../store/favourite-context';

const MainNavigation = () => {
  const favoriteCtx = useContext(FavouriteContext);

  return <header className={classes.header}>
    <div className={classes.logo}>
      React Meetups
    </div>
    <nav>
      <ul>
        <li>
          <Link to="/react-basics">All Meetups Page</Link>
        </li>
        <li>
          <Link to="/new-meetup">New Meetup Page</Link>
        </li>
        <li>
          <Link to="/favourites">
            Favourite Page
            <span className={classes.badge}>
              {favoriteCtx.totalFavourites}
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  </header>;
};

export default MainNavigation;