import moment from 'moment';
/**
 * 
 * @param {any} spendings Current spendings which will be filtered
 * @param {any} filters Filters used on spendings
 * @returns Filtered spendings
 */
const getFilteredSpendings = (spendings, filters) => {
  const { text, sortBy, startDate, endDate } = filters;
  
  return spendings.filter((spending) => {
    const createdAtMoment = moment(spending.createdAt);
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
    const textMatch = spending.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date')
      return a.createdAt < b.createdAt ? 1 : -1;
    else if (sortBy === 'amount')
      return a.amount < b.amount ? 1 : -1;
  });
};

export default getFilteredSpendings;
