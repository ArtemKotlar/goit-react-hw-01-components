import PT from 'prop-types';
import { Section, Title, List, Item, Value } from './Statistics.styled'

const Statistics = ({ title, stats }) => {
    return (
    <Section>
        {title && <Title>{title}</Title>}

        <List>
            {stats.map(el => (
            <Item key={el.id}>              
                <Value>{el.label}</Value>
                <Value>{el.percentage}%</Value>
            </Item>
            ))}  
        </List>
    </Section>
    )
}

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