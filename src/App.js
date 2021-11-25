import './App.css';
import Section from './Сomponents/Section/Section';
import Profile from './Сomponents/Profile/Profile';
import Statistics from './Сomponents/Statistics/Statistics';
import FriendList from './Сomponents/FriendList/FriendList';
import TransactionHistory from './Сomponents/Transactions/TransactionHistory';
import userData from './data/user.json';
import statisticData from './data/statistics.json';
import friendListData from './data/friends.json';
import transactionData from './data/transactions.json';

function App() {
  return (
    <Section classNames="userCard">
      <Profile user={userData} />
      <Statistics title="Upload stats" stats={statisticData} />
      <FriendList friendsData={friendListData} />
      <TransactionHistory transactionData={transactionData} />
    </Section>
  );
}

export default App;
