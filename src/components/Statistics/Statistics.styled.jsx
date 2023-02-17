import styled from '@emotion/styled';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 0 auto;
  margin-top: 50px;
  width: fit-content;
  background-color: rgb(120 185 175);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;

export const Title = styled.h2`
  font-size: 20px;
  margin: 0;
  padding: 20px 0;
  text-transform: uppercase;
`;

export const List = styled.ul`
  display: flex;
  margin: 0 auto;
  list-style: none;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;

  background-color: ${props => {
    switch (props.label) {
      case '.docx':
        return 'green';
      case '.pdf':
        return 'red';
      case '.mp3':
        return 'blue';
      case '.psd':
        return 'orange';
      default:
        return 'red';
    }
  }};
`;

export const Value = styled.span`
  display: flex;
  flex-direction: column;
  padding: 15px;
  color: #fff;
`;
