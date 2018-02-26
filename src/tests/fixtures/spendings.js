import moment from 'moment';

export default [
  {
    id: '1',
    description: 'Lunch',
    note: '',
    amount: 450,
    createdAt: 0
  },
  {
    id: '2',
    description: 'Dinner',
    note: '',
    amount: 950,
    createdAt: moment(0).subtract(4, 'days').valueOf()
  },
  {
    id: '3',
    description: 'Cinema',
    note: '',
    amount: 1850,
    createdAt: moment(0).subtract(4, 'days').valueOf()
  }
]