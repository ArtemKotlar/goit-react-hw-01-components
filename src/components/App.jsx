import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import user from '../Data/user.json';
import data from '../Data/data.json';
import friends from '../Data/friends.json';
import transactions from '../Data/transactions.json';
import { Button } from './Button/Button';
import { DiReact, DiCodeigniter, DiProlog } from 'react-icons/di';
import { Box } from './Box';

export const App = () => {
  return (
    <Box
      bg="box"
      pt={4}
      pb={4}
      width="100%"
      display="flex"
      alignItems="center"
      flexDirection="column"
      as="main"
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
      <Button icon={DiReact}>Клік</Button>
      <Button icon={DiCodeigniter} type="submit">
        Форма
      </Button>
      <Button type="submit">Без іконкі</Button>
      {/* Для disabled */}
      <Button icon={DiProlog} type="submit" disabled>
        Вимкнено
      </Button>
    </Box>
  );
};
