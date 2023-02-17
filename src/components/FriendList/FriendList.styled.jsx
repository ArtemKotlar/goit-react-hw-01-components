import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  margin-top: 50px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 20px;
  background-color: #8ef9f7;
  padding: 20px;
  width: 200px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;

export const Indicator = styled.span`
  width: 15px;
  height: 15px;
  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
  border-radius: 50%;
  margin: 0 15px;
`;

export const Image = styled.img`
  display: block;
  width: 70px;
`;

export const Title = styled.p`
  display: block;
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes[3]}px;
  font-weight: ${p => p.theme.fontWeights.heading};
  padding-left: 15px;
`;
