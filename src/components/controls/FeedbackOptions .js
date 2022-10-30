import React from 'react';
import css from './controls.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.controls}>
      {options.map(option => (
        <button
          className={css.btn}
          key={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
// const FeedbackOptions = ({
//   onIncrementGood,
//   onIncrementNeutral,
//   onIncrementBad,
// }) => (
//   <>
//     <button type="button" onClick={onIncrementGood}>
//       Good
//     </button>
//     <button type="button" onClick={onIncrementNeutral}>
//       Neutral
//     </button>
//     <button type="button" onClick={onIncrementBad}>
//       Bad
//     </button>
//   </>
// );
export default FeedbackOptions;
