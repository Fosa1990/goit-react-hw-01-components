import './App.css';
import userData from './data/user.json';
import Profile from './Components/Profile.js';

function App() {
  return (
    <div className="App">
      <Profile
        avatar={userData.avatar}
        tag={userData.tag}
        username={userData.username}
        location={userData.location}
        followers={userData.stats.followers}
        views={userData.stats.views}
        likes={userData.stats.likes}
      />
    </div>
  );
}

export default App;
