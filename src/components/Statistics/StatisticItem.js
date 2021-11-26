import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
import onRandomColorGenerator from '../../js/generators/onRandomColorGenerator';
import colorsData from '../../data/colors.json';

const StatisticItem = ({ item }) => {
  return (
    <li
      key={item.id}
      className={styles.item}
      style={{
        backgroundColor:
          colorsData[onRandomColorGenerator(0, colorsData.length - 1)],
      }}
    >
      <span className={styles.label}>{item.label}</span>
      <span className={styles.percentage}>{item.percentage}%</span>
    </li>
  );
};

StatisticItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
export default StatisticItem;
