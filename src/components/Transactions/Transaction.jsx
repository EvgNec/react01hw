import PropTypes from 'prop-types';


export const Transaction
    = ({ type, amount, currency}) =>
    {
        return (
                <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
        );
    }

Transaction.propTypes = {
    type: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    }