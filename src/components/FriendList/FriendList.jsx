import PT from 'prop-types';
import FriendListItem from './FriendListItem'
import { List } from './FriendList.styled'
const FriendList = ({friends}) => {
    return (
        <List>
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
    </List>
    )
}

export default FriendList

FriendList.propTypes = {
  id: PT.arrayOf(PT.shape({id: PT.string.isRequired}))
}