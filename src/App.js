import React from 'react';
import {Route, Switch} from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetup from './pages/NewMeetup';
import Favourites from './pages/Favourites';
import Layout from './components/layouts/Layout';

const App = () => {
  return (
      <Layout>
        <Switch>
          <Route path="/react-basics" exact>
            <AllMeetupsPage/>
          </Route>
          <Route path="/new-meetup">
            <NewMeetup/>
          </Route>
          <Route path="/favourites">
            <Favourites/>
          </Route>
        </Switch>
      </Layout>
  );
};

export default App;