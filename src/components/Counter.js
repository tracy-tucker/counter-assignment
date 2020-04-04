import React from 'react';


class Counter extends React.Component {


    state = {
        num: 0,
    }

    handleIncrease = () => {
        //
    }

    handleDecrease = () => {
        //
    }

    render() {
        return (
            <div>
                <p>{this.state.num}</p>
                <button onClick={() => this.handleIncrease()}>+</button>
                <button onClick={() => this.handleDecrease()}>-</button>
            </div>
        )
    }
}

export default Counter;



// Create a Counter

// 1. Create a plus button and a minus button
// a. Clicking on plus increases count, click on minus decreases count.

// BONUS

// 1. Page has 2 extra buttons
// a. Clicking on "increase all" will increase the count by 1 on all the counters
// b. Clicking on "decrease all" will decrease the count by 1 on all the counters

// STEPS

// 1. add <p> element with in div to render state
// 1. create button elements - one for + and other for -
// 2. set the initial state to zero
// 2. create 2 functions - one for increment, one for decrement
// 3a. add event change handler to each button
// 3b. call the function (include function name) for each corresponding button