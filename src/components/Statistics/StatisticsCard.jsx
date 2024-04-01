import PropTypes from 'prop-types';

export const StatisticsCard
    = ({ label, percentage, }) =>
    {
        return (
            <li class="item">
                <span class="label">{label}</span>
                <span class="percentage">{percentage}</span>
            </li>
        );
    }

StatisticsCard.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
    }