import PropTypes from 'prop-types';
import { getRandomHexColor } from '../GetColor';

export const StatisticsCard
    = ({ label, percentage, }) =>
    {
        return (
            <li class="item"
                          style={{
                backgroundColor: getRandomHexColor(),
              }}
            >
                <span class="label">{label}</span>
                <span class="percentage">{percentage}</span>
            </li>
        );
    }

StatisticsCard.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
    }