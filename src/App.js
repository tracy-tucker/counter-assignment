import React from 'react';
import Counter from './components/Counter';

class App extends React.Component {

  //Method called BEFORE anything else when component is initialized.
  //Location to set initial state.
  constructor(props) {
    super(props);
    this.state = {
      counterA: 0,
      counterB: 0,
      counterC: 0
    }
  }

  //prevState - built-in React method that takes in state and props at the time the change is being applied.
  handleAllIncrease = () => {
    console.log("hello App Increase")
    this.setState(prevState => ({
      counterA: prevState.counterA + 1,
      counterB: prevState.counterB + 1,
      counterC: prevState.counterC + 1
    }))
  }

  handleAllDecrease = () => {
    this.setState(prevState => ({
      counterA: prevState.counterA - 1,
      counterB: prevState.counterB - 1,
      counterC: prevState.counterC - 1
    }))
  }

  //Fragments let you group a list of children without adding extra nodes to the DOM
  // Best example: Table
  render() {
    return (
      // fragment
      <>
        <div className="App">
          {/* state variables passed to the local counter components */}
            <Counter  counter={this.state.counterA} /> 
            <Counter  counter={this.state.counterB} />
            <Counter  counter={this.state.counterC} />
        </div>
        <br />
        <div>
          <button onClick={() => this.handleAllIncrease()}>Increase all</button>
          <button onClick={() => this.handleAllDecrease()}>Decrease all</button>
        </div>
      </>
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