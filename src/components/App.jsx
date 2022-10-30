import React from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from 'components/Controls/FeedbackOptions ';
import Notification from 'components/Notification/Notification';
import Section from 'components/TitleSection/TitleSection';
import css from './common.module.css';

export default class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    if (this.state.good === 0) {
      return 0;
    } else
      return ((this.state.good / this.countTotalFeedback()) * 100).toFixed(2);
  };

  render() {
    const { onLeaveFeedback } = this;
    const total = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

    return (
      <div className={css.container}>
        <Section title="Please, leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
        <div>
          <Section title="Statistics">
            {total === 0 ? (
              <Notification message="There is no feedback" />
            ) : (
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={total}
                positiveFeedbackPercentage={positiveFeedbackPercentage}
              />
            )}
          </Section>
        </div>
      </div>
    );
  }
}
