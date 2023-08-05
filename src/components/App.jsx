import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { countTotalFeedback } from './counters/countTotalFeedback';
import { countPositiveFeedbackPercentage } from './counters/countPositiveFeedbackPercentage';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onFeedBtnClick = e => {
    const name = e.target.name;
    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        break;
    }
  };

  const noFeedbacks = good === 0 && neutral === 0 && bad === 0;
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          onLeaveFeedback={onFeedBtnClick}
          options={['good', 'neutral', 'bad']}
        />
      </Section>

      <Section title="Statistics">
        {noFeedbacks ? (
          <Notification message={'There is no feedback'} />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback(good, neutral, bad)}
            positivePercentage={countPositiveFeedbackPercentage(
              good,
              neutral,
              bad
            )}
          />
        )}
      </Section>
    </>
  );
};
