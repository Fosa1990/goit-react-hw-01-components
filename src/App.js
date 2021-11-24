import './App.css';
import Section from './Сomponents/Section/Section';
import Profile from './Сomponents/Profile/Profile';
import Statistics from './Сomponents/Statistics/Statistics';
import FriendList from './Сomponents/FriendList/FriendList';
import userData from './data/user.json';
import statisticData from './data/statistics.json';
import friendListData from './data/friends.json';

function App() {
  return (
    <Section classNames="userCard">
      <Profile
        avatar={userData.avatar}
        tag={userData.tag}
        username={userData.username}
        location={userData.location}
        stats={userData.stats}
      />
      <Statistics title="Upload stats" stats={statisticData} />
      <FriendList friendsData={friendListData} />
    </Section>
  );
}

export default App;
