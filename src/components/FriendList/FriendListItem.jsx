import { Box } from 'components/Box';
import PT from 'prop-types';
import { Indicator, Image, Title } from './FriendList.styled';
const FriendListItem = ({ avatar, isOnline, name }) => {
  return (
    <Box
      mb={4}
      display="flex"
      alignItems="center"
      bg="cart"
      p={4}
      borderRadius="normal"
      boxShadow="shadow"
      as="li"
    >
      <Indicator isOnline={isOnline}></Indicator>
      <Image src={avatar} alt="User avatar" width="48" />
      <Title>{name}</Title>
    </Box>
  );
};
export default FriendListItem;

FriendListItem.propTypes = {
  avatar: PT.string.isRequired,
  name: PT.string.isRequired,
  isOnline: PT.bool.isRequired,
};
