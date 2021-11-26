import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
import StatisticItem from './StatisticItem';

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>Upload stats</h2>}

      <ul className={styles.statsList}>
        {stats.map(item => StatisticItem({ item }))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default Statistics;
