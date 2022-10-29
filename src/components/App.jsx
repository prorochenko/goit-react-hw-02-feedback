import React from 'react';
// import Feedback from './feedback/Feedback';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from 'components/Controls/FeedbackOptions ';
import Notification from 'components/Notification/Notification';
import Section from 'components/TitleSection/TitleSection';

export default class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  goodElement = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };

  neutralElement = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };
  badElement = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
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
    const total = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

    return (
      <>
        <Section title="Please, leave feedback">
          <FeedbackOptions
            onIncrementGood={this.goodElement}
            onIncrementNeutral={this.neutralElement}
            onIncrementBad={this.badElement}
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
      </>
    );
  }
}
