import PT from 'prop-types';
import css from "./TransactionHistory.module.css"

const TransactionHistory = ({transactions}) => {
    return (
    <table className={css.transaction__history}>
      <thead className={css.transaction__head}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      {transactions.map(({ id, type, amount, currency }) => {
        return (
          <tbody key={id}>
            <tr>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
}

export default TransactionHistory

TransactionHistory.propTypes = {
  id: PT.string,
  type: PT.string,
  amount: PT.number,
  currency: PT.string,
};