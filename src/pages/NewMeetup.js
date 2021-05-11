import {useHistory} from 'react-router-dom';
import NewMeetupForm from '../components/meetups/NewMeetupForm';

const NewMeetup = () => {
  const history = useHistory();
  const addNewMeetup = meetupData => {
    fetch(
        'https://react-general-c6862-default-rtdb.firebaseio.com/meetups.json',
        {
          method: 'POST',
          body: JSON.stringify(meetupData),
          headers: {
            'Content-Type': 'application/json',
          },
        }).then(() => {
      history.replace('/');
    }).catch(e => console.log(e));
  };
  return <div>
    <h1>Add New Meetup</h1>
    <NewMeetupForm onAddMeetup={addNewMeetup}/>
  </div>;
};

export default NewMeetup;