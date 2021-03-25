import 'normalize.css';
import Profile from '.components/Profile/Profile';
import Statistics from '.components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from '.components/TransactionHistory/TransactionHistory';
import user from './Profile/user.json';
import statisticalData from './Statistics/statistical-data.json';
import friends from './FriendList/friends.json';
import transactions from './TransactionHistory/transactions.json'

function App() {
  return (
  <div>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      />
    <Statistics
      title="Upload stats"
      stats={statisticalData}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions}/>
  </div>
    
  );
}

export default App;
