import selectSpendingsTotal from './../../selectors/spendings-total';
import spendings from './../fixtures/spendings';

test('should return 0 if no spendings', () => {
  const res = selectSpendingsTotal([]);
  expect(res).toBe(0);
});

test('should correctly add up a single spending', () => {
  const res = selectSpendingsTotal([spendings[0]]);
  expect(res).toBe(450);
});

test('should correctly add up a multiple spendings', () => {
  const res = selectSpendingsTotal(spendings);
  expect(res).toBe(3250);
});
