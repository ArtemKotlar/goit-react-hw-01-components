import PT from 'prop-types';
import { Item, Value } from './Statistics.styled';

export const StatisticsList = ({ label, value }) => {
  return (
    <Item label={label}>
      <Value>{label}</Value>
      <Value>{value}%</Value>
    </Item>
  );
};

StatisticsList.propTypes = {
  label: PT.string.isRequired,
  value: PT.number.isRequired,
};
