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
