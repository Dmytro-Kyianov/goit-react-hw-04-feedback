export const countTotalFeedback = (good, neutral, bad) => {
  const totalFeedbacks = good + neutral + bad;
  return totalFeedbacks;
};