import FriendListItem from './FriendListItem'
import { List } from './FriendList.styled'
const FriendList = ({friends}) => {
    return (
        <List>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <FriendListItem
            key={id}
            image={avatar}
            name={name}
            status={isOnline}
          />
        );
      })}
    </List>
    )
}

export default FriendList