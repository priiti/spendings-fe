import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class SpendingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: '',
      description: '',
      note: '',
      createdAt: moment(),
      calendarFocused: false
    };

    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleNoteChange = this.handleNoteChange.bind(this);
    this.handleAmountChange = this.handleAmountChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleCalendarFocusChange = this.handleCalendarFocusChange.bind(this);
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
    
    if (amount.match(/^\d*(\.\d{0,2})?$/))
      this.setState(() => ({ amount }));
  }

  handleDateChange(createdAt) {
    this.setState(() => ({ createdAt }));
  }

  handleCalendarFocusChange({ focused }) {
    this.setState(() => ({ calendarFocused: focused }));
  }

  render() {

    return (
      <div>
        <form>
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

export default SpendingForm;
