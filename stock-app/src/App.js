import React, { Component } from 'react';
import './App.css';

import { getNextMonth, getPreviousMonth } from './utils/functions'
import Calendar from './components/calendar'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentDate: null,
      changedDate: null
    }
    this.handleDateChange = this.handleDateChange.bind(this)
  }

  componentWillMount() {
    this.setState({
      currentDate: new Date(),
      changedDate: new Date()
    })
    //#TODO: Add currentDate change on day change
  }

  handleDateChange(move) {
    console.log(move)
    let newChangedDate = this.state.changedDate
    if (move === 'forward') {
      newChangedDate = getNextMonth(newChangedDate)
    } else {
      newChangedDate = getPreviousMonth(newChangedDate)
    }
    this.setState({
      changedDate: newChangedDate
    })
  }

  render() {
    const { currentDate, changedDate } = this.state
    return (
      <div className="App" >
        <Calendar
          currentDate={currentDate}
          changedDate={changedDate}
          onDateChange={this.handleDateChange}
        />
      </div>
    );
  }
}

export default App;
