import React from 'react';
import Counter from './components/Counter';

class App extends React.Component {

  render() {
    return (
      <div className="App">
          <Counter />
          <Counter />
          <Counter />
      </div>
    );
  }
}

export default App;


// BONUS

// 1. Page has 2 extra buttons
// a. Clicking on "increase all" will increase the count by 1 on all the counters
// b. Clicking on "decrease all" will decrease the count by 1 on all the counters