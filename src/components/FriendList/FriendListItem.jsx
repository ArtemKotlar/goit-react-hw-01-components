import { Item, Indicator, Image, Title } from "./FriendList.styled";
const FriendListItem = ({avatar, isOnline, name}) => {
    return (
        <Item>
            <Indicator >{isOnline}</Indicator>
            <Image src={avatar} alt="User avatar" width="48" />
            <Title >{name}</Title>
        </Item>
    );
}
export default FriendListItem