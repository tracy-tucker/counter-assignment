import React from 'react';
import Counter from './components/Counter';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.counterElement = React.createRef();
  }

  handleAllIncrease = () => {
    console.log("hello App Increase")
  }

  handleAllDecrease = () => {
    console.log("hello App Decrease")
  }

  render() {
    return (
      <div className="App">
        <button onClick={() => this.handleAllIncrease()}>Increase all</button>
        <button onClick={() => this.handleAllDecrease()}>Decrease all</button>
          <Counter ref={this.counterElement}/>
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

// STEPS

// 1. create a button for increase all and decrease all
// 2. create an empty function for corres. button
// 3. add an event handler to each button referencing corres. function
// 4. Reference the childComponent - use createRef in constructor
// 5. Add ref to <Counter />
// 6. FUNCTION - reference the counterElement and call the corres child element