import React from 'react';


class Counter extends React.Component {


    state = {
        num: 0,
    }

    handleIncrease = () => {
        console.log("hello increase")
        this.setState({
            num: this.state.num + 1,
        })
    }

    handleDecrease = () => {
        console.log("hello decrease")
        this.setState({
            num: this.state.num - 1,
        })
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


// SEE APP FOR FOR BONUS STEPS


// STEPS

// 1. add <p> element with in div to render state
// 2. create button elements - one for + and other for -
// 3. set the initial state to zero
// 4. create 2 functions - one for increment, one for decrement
// 5a. add event change handler to each button
// 5b. add the function (include function name) for each corresponding button

// FUNCTION STEPS

// 1. access the initial state
// 2. add/subtract the state by 1.
// 3. set new state