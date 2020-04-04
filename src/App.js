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
