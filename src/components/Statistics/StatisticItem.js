import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
import getRandomColor from '../../helpers/generators/getRandomColor';

const StatisticItem = ({ item }) => {
  return (
    <li
      key={item.id}
      className={styles.item}
      style={{
        backgroundColor: getRandomColor(),
      }}
    >
      <span className={styles.label}>{item.label}</span>
      <span className={styles.percentage}>{item.percentage}%</span>
    </li>
  );
};

StatisticItem.defaultProps = {
  label: 'Label',
  percentage: 0,
};

StatisticItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
export default StatisticItem;
