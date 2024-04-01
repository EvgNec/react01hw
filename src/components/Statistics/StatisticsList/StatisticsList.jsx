import PropTypes from 'prop-types';
import { StatisticsCard } from '../StatisticsCard/StatisticsCard';
import { StatisticsSection, Title } from './StatisticsList.styled';

export const StatisticsList = ({ statistics }) => {
  return (
    <StatisticsSection>
      <Title>Upload stats</Title>

      <ul class="stat-list">
        {statistics.map(({ id, label, percentage }) => (
          <StatisticsCard key={id} label={label} percentage={percentage} />
        ))}       
      </ul>
    </StatisticsSection>
  );
};

StatisticsList.propTypes = {
    statistics: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage    : PropTypes.string.isRequired,
        })    
    )
}

