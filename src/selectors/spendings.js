/**
 * 
 * @param {any} spendings Current spendings which will be filtered
 * @param {any} filters Filters used on spendings
 * @returns Filtered spendings
 */
const getVisibleSpendings = (spendings, filters) => {
  const { text, sortBy, startDate, endDate } = filters;
  
  return spendings.filter((spending) => {
    const startDateMatch = typeof startDate !== 'number' || spending.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || spending.createdAt <= endDate;
    const textMatch = spending.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date')
      return a.createdAt < b.createdAt ? 1 : -1;
    else if (sortBy === 'amount')
      return a.amount < b.amount ? 1 : -1;
  });
};

export default getVisibleSpendings;
