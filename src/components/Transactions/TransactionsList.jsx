import PropTypes from 'prop-types';
import { Transaction } from './Transaction';
import { TransactionsSection, Title } from './Transactions.styled';

export const TransactionsList = ({ transactions }) => {
  return (
    <TransactionsSection>
      <Title>Transactions Statistics</Title>
      <table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <Transaction key={id} type={type} amount={amount}  currency={currency}/>
        ))} 
  </tbody>
</table>
    </TransactionsSection>
  );
};

TransactionsList.propTypes = {
    statistics: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage    : PropTypes.string.isRequired,
        })    
    )
}

