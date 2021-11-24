import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
import colorsData from '../../data/colors.json';

const StatisticElement = ({ item, index }) => {
  return (
    <li
      key={item.id}
      className={styles.item}
      style={{ backgroundColor: colorsData[index] }}
    >
      <span className={styles.label}>{item.label}</span>
      <span className={styles.percentage}>{item.percentage}%</span>
    </li>
  );
};

StatisticElement.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
export default StatisticElement;
