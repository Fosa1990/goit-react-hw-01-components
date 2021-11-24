import './App.css';
import userData from './data/user.json';
import Profile from './Сomponents/Profile/Profile';

function App() {
  return (
    <div className="App">
      <Profile
        avatar={userData.avatar}
        tag={userData.tag}
        username={userData.username}
        location={userData.location}
        stats={userData.stats}
      />
    </div>
  );
}

export default App;
