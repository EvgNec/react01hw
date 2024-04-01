import PropTypes from 'prop-types';
import { StatisticsCard } from './StatisticsCard';

export const StatisticsList = ({ statistics }) => {
  return (
    <section class="statistics">
      <h2 class="title">Upload stats</h2>

      <ul class="stat-list">
        {statistics.map(({ id, label, percentage }) => (
          <StatisticsCard key={id} label={label} percentage={percentage} />
        ))}       
      </ul>
    </section>
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

