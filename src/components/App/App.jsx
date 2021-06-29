// import logo from './logo.svg';
import './App.module.css';
import Container from '../Container/Container';
import Profile from '../Profile/Profile';
import Statistics from '../Statistics/Statistics';
import FriendList from '../FriendList/FriendList';
import TransactionHistory from '../TransactionHistory/TransactionHistory';

import user from '../../data/user.json';
import statisticalData from '../../data/statistical-data.json';
import friends from '../../data/friends.json';
import transactions from '../../data/transactions.json';

function App() {
  return (
    <div>
      <Container>
        <Profile
          avatarUrl={user.avatar}
          name={user.name}
          tag={user.tag}
          location={user.location}
          stats={user.stats}
        ></Profile>

        <Statistics title="Upload stats" stats={statisticalData}></Statistics>

        <FriendList friends={friends}></FriendList>

        <TransactionHistory items={transactions}></TransactionHistory>
      </Container>
    </div>
  );
}

export default App;
