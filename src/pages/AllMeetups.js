import MeetupList from '../components/meetups/MeetupList';
import {useEffect, useState} from 'react';

const AllMeetupsPage = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    fetch('https://react-general-c6862-default-rtdb.firebaseio.com/meetups.json').
        then(response => response.json()).
        then(data => {
          const meetups = [];

          for (const key in data) {
            const meetup = {
              id: key,
              ...data[key],
            };
            meetups.push(meetup);
          }
          setIsLoading(false);
          setLoadedMeetups(meetups);
        });
  }, []);

  if (isLoading) {
    return <section>
      Loading...
    </section>;
  }

  return <div>
    <h1>All Meetups</h1>
    <MeetupList meetups={loadedMeetups}/>
  </div>;
};

export default AllMeetupsPage;