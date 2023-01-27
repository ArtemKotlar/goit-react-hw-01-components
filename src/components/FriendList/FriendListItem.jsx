import PT from 'prop-types';
import { Item, Indicator, Image, Title } from "./FriendList.styled";
const FriendListItem = ({avatar, isOnline, name}) => {
    return (
        <Item>
            <Indicator isOnline={isOnline}></Indicator>
            <Image src={avatar} alt="User avatar" width="48" />
            <Title >{name}</Title>
        </Item>
    );
}
export default FriendListItem

FriendListItem.propTypes = {
  avatar: PT.string.isRequired,
  name: PT.string.isRequired,
  isOnline: PT.bool.isRequired,
};