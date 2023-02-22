import PT from 'prop-types';
import FriendListItem from './FriendListItem';
import { Box } from 'components/Box';
const FriendList = ({ friends }) => {
  return (
    <Box
      p="0"
      mt={5}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      as="ul"
    >
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        );
      })}
    </Box>
  );
};

export default FriendList;

FriendList.propTypes = {
  id: PT.arrayOf(PT.shape({ id: PT.string.isRequired })),
};
