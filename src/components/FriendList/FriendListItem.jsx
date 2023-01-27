import { Item, Indicator, Image, Title } from "./FriendList.styled";
const FriendListItem = ({imege, status, name}) => {
    return (
        <Item>
            <Indicator >{status}</Indicator>
            <Image src={imege} alt="User avatar" width="48" />
            <Title >{name}</Title>
        </Item>
    );
}
export default FriendListItem