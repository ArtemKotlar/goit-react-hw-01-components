import PT from 'prop-types';
import { Section, Title, List } from './Statistics.styled';
import { StatisticsList } from './StatisticsList';

const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}

      <List>
        {stats.map(({ id, label, percentage }) => {
          return <StatisticsList key={id} label={label} value={percentage} />;
        })}
      </List>
    </Section>
  );
};

export default Statistics;

Statistics.propTypes = {
  title: PT.string,
  stats: PT.arrayOf(
    PT.shape({
      id: PT.string,
      label: PT.string,
      percentage: PT.number,
    })
  ),
};
