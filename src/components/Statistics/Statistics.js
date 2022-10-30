import React from 'react';
import css from './Statistic.module.css';

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positiveFeedbackPercentage,
}) => (
  <div className={css.statistic}>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <p>Total: {total}</p>
    <p>Positive feedback: {positiveFeedbackPercentage}%</p>
  </div>
);

export default Statistics;
