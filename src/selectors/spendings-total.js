export default (spendings) => {
  return spendings
      .map((s) => s.amount)
      .reduce((total, amount) => total + amount, 0);
};
