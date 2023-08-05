import { countTotalFeedback } from './countTotalFeedback';
export const countPositiveFeedbackPercentage = (good, neutral, bad) => {
  const total = countTotalFeedback(good, neutral, bad);
  let result = 0;

  if (total !== 0) {
    result = (good * 100) / total;
  }
  return Math.round(result);
};