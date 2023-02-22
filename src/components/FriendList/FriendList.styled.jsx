import styled from 'styled-components';

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
