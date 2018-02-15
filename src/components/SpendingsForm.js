import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import Error from './Error';
import 'react-dates/lib/css/_datepicker.css';

class SpendingsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: props.spending ? props.spending.amount : '',
      description: props.spending ? props.spending.description : '',
      note: props.spending ? props.spending.note : '',
      createdAt: props.spending ? moment(props.spending.createdAt) : moment(),
      calendarFocused: false,
      error: undefined
    };

    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleNoteChange = this.handleNoteChange.bind(this);
    this.handleAmountChange = this.handleAmountChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleCalendarFocusChange = this.handleCalendarFocusChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleDescriptionChange(e) {
    const description = e.target.value;
    this.setState(() => ({ description }));
  }

  handleNoteChange(e) {
    const note = e.target.value;
    this.setState(() => ({ note }))
  }

  handleAmountChange(e) {
    const amount = e.target.value;
    
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/))
      this.setState(() => ({ amount }));
  }

  handleDateChange(createdAt) {
    if (createdAt)
      this.setState(() => ({ createdAt }));
  }

  handleCalendarFocusChange({ focused }) {
    this.setState(() => ({ calendarFocused: focused }));
  }

  handleOnSubmit(e) {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      const error = `Please provide 'description' and 'amount'`;
      this.setState(() => ({ error }));
    } else {
      this.setState((prevState) => ({ error: undefined }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <Error error={this.state.error} />}
        <form onSubmit={this.handleOnSubmit}>
          <input 
            type="text" 
            placeholder="Description" 
            value={this.state.description} 
            autoFocus
            onChange={this.handleDescriptionChange}
          />
          <input
            type="number"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.handleAmountChange}
          />
          <SingleDatePicker 
            date={this.state.createdAt}
            onDateChange={this.handleDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.handleCalendarFocusChange}
            numberOfMonths={1}
            isOutsideRange={(day) => false}
          />
          <textarea 
            placeholder="Add note for spending (optional)"
            value={this.state.note}
            onChange={this.handleNoteChange}
          ></textarea>
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default SpendingsForm;
