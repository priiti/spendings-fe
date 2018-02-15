import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { 
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate 
} from './../actions/filters';
import { DateRangePicker } from 'react-dates';

class SpendingsListFiltersContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calendarFocused: null
    };

    this.handleSortBy = this.handleSortBy.bind(this);
    this.handleTextFilterSearch = this.handleTextFilterSearch.bind(this);
    this.handleDatesChange = this.handleDatesChange.bind(this);
    this.handleFocusChange = this.handleFocusChange.bind(this);
  }

  handleTextFilterSearch(e) {
    const { value } = e.target;
    this.props.setTextFilter(value);
  }

  handleSortBy(e) {
    if (e.target.value === 'date')
      this.props.sortByDate();
    else if (e.target.value=== 'amount')
      this.props.sortByAmount()
  }

  handleDatesChange({ startDate, endDate }) {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  }

  handleFocusChange(calendarFocused) {
    this.setState(() => ({ calendarFocused }));
  }

  render() {
    return (
      <div>
        <input type="text" value={this.props.filters.text} onChange={this.handleTextFilterSearch}
        />
        <select 
          value={this.props.filters.sortBy} onChange={this.handleSortBy}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.handleDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.handleFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates={true}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setTextFilter,
    sortByAmount,
    sortByDate,
    setStartDate,
    setEndDate 
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SpendingsListFiltersContainer);
